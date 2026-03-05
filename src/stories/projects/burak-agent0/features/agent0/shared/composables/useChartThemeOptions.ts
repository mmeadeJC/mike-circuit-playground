import { onMounted, onUnmounted, ref } from 'vue';

const getCssVar = (name: string) =>
  typeof document !== 'undefined'
    ? getComputedStyle(document.documentElement).getPropertyValue(name).trim()
    : '';

export function buildMonthlyChartOptions() {
  const subtleText = getCssVar('--jc-color-text-neutral-subtle');
  const gridColor = getCssVar('--jc-color-border-neutral-default_alpha');

  return {
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'center' as const,
        labels: {
          usePointStyle: false,
          boxWidth: 8,
          boxHeight: 8,
          useBorderRadius: true,
          borderRadius: 4,
          padding: 20,
          color: subtleText,
          font: { size: 12 },
        },
      },
      tooltip: {
        enabled: false,
        callbacks: {
          label: (ctx: { dataset: { label: string }; parsed: { y: number } }) =>
            `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString()} requests`,
        },
        external: (context: {
          chart: { canvas: HTMLCanvasElement };
          tooltip: {
            opacity: number;
            caretX: number;
            caretY: number;
            title: string[];
            body: { lines: string[] }[];
            labelColors: { borderColor: string; backgroundColor: string }[];
          };
        }) => {
          const { chart, tooltip } = context;
          let el = chart.canvas.parentNode?.querySelector('.circuit-chart-tooltip') as HTMLDivElement | null;
          if (!el) {
            el = document.createElement('div');
            el.classList.add('circuit-chart-tooltip');
            chart.canvas.parentNode?.appendChild(el);
          }
          if (tooltip.opacity === 0) {
            el.style.opacity = '0';
            return;
          }
          const title = tooltip.title?.[0] || '';
          const rows = tooltip.body?.map((b: { lines: string[] }, i: number) => {
            const color = tooltip.labelColors?.[i]?.backgroundColor || '#ccc';
            const text = b.lines[0] || '';
            return `<div style="display:flex;align-items:center;gap:6px;padding:3px 0;">
              <span style="width:8px;height:8px;border-radius:50%;background:${color};flex-shrink:0;display:inline-block;"></span>
              <span class="text-body-sm text-neutral-base">${text}</span>
            </div>`;
          }).join('') || '';
          el.className = 'circuit-chart-tooltip shadow-e300 rounded-md bg-neutral-surface';
          el.style.cssText = 'position:absolute;pointer-events:none;transition:opacity 0.15s ease;z-index:50;padding:12px 14px;min-width:180px;';
          el.innerHTML = `<div class="text-body-sm-semi-bold text-neutral-base" style="margin-bottom:8px;">${title}</div>${rows}`;
          el.style.opacity = '1';
          el.style.left = `${tooltip.caretX}px`;
          el.style.top = `${tooltip.caretY}px`;
          el.style.transform = 'translate(-50%, calc(-100% - 12px))';
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: subtleText,
          font: { size: 12 },
        },
      },
      y: {
        beginAtZero: true,
        border: { display: false },
        ticks: {
          color: subtleText,
          font: { size: 12 },
          callback: (value: number) => (value >= 1000 ? `${value / 1000}k` : value),
        },
        grid: {
          color: gridColor,
        },
      },
    },
  };
}

export function useChartThemeOptions() {
  const monthlyChartOptions = ref(buildMonthlyChartOptions());
  let themeObserver: MutationObserver | null = null;

  onMounted(() => {
    themeObserver = new MutationObserver(() => {
      monthlyChartOptions.value = buildMonthlyChartOptions();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
  });

  onUnmounted(() => {
    themeObserver?.disconnect();
  });

  return {
    monthlyChartOptions,
  };
}
