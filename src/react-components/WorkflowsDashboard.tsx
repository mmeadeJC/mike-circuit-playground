/**
 * WorkflowsDashboard — standalone React + Tailwind CSS component.
 *
 * Features:
 *  - Full dashboard layout: sidebar nav, top bar, page header, data table
 *  - `isEmpty` toggle to preview the empty-state illustration + Create CTA
 *  - "Add Workflow" modal with Name, Type (Event / Schedule), and Status toggle
 *  - All mock data sourced from the reference design
 */

import React, { useState } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

type WorkflowType   = 'Event' | 'Schedule';
type WorkflowStatus = 'Enabled' | 'Disabled';

interface Workflow {
  id: number;
  name: string;
  description: string;
  type: WorkflowType;
  lastRan: string;
  status: WorkflowStatus;
  lastEdited: string;
  createdBy: string;
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const INITIAL_WORKFLOWS: Workflow[] = [
  { id: 1,  name: 'Low Disk Space Alert', description: 'A brief summary of the alert', type: 'Event',    lastRan: '1 hour ago',  status: 'Enabled',  lastEdited: '3 hours ago', createdBy: 'Ricardo Diaz'       },
  { id: 2,  name: 'Idle Device Purge',    description: 'Compliance Check',             type: 'Schedule', lastRan: '1 hour ago',  status: 'Disabled', lastEdited: '1 hour ago',  createdBy: 'Aiden Pearce'       },
  { id: 3,  name: 'Low Disk Space Alert', description: 'A brief summary of the alert', type: 'Event',    lastRan: '1 hour ago',  status: 'Enabled',  lastEdited: '1 day ago',   createdBy: 'Lacey Bennett'      },
  { id: 4,  name: 'Low Disk Space Alert', description: 'A brief summary of the alert', type: 'Event',    lastRan: '1 hour ago',  status: 'Enabled',  lastEdited: '5 hours ago', createdBy: 'Arthur Morgan'      },
  { id: 5,  name: 'Low Disk Space Alert', description: 'A brief summary of the alert', type: 'Event',    lastRan: '1 hour ago',  status: 'Enabled',  lastEdited: '1 week ago',  createdBy: 'Dutch Van Der Linde'},
  { id: 6,  name: 'Low Disk Space Alert', description: 'A brief summary of the alert', type: 'Event',    lastRan: '1 hour ago',  status: 'Enabled',  lastEdited: '3 days ago',  createdBy: 'Micah Bell'         },
  { id: 7,  name: 'Low Disk Space Alert', description: 'A brief summary of the alert', type: 'Event',    lastRan: '1 hour ago',  status: 'Enabled',  lastEdited: '1 month ago', createdBy: 'Sadie Adler'        },
  { id: 8,  name: 'Low Disk Space Alert', description: 'A brief summary of the alert', type: 'Event',    lastRan: '1 hour ago',  status: 'Enabled',  lastEdited: '1 week ago',  createdBy: 'Charles Smith'      },
  { id: 9,  name: 'Idle Device Purge',    description: 'Compliance Check',             type: 'Schedule', lastRan: '1 hour ago',  status: 'Disabled', lastEdited: '5 hours ago', createdBy: 'Omar Little'        },
  { id: 10, name: 'Low Disk Space Alert', description: 'A brief summary of the alert', type: 'Event',    lastRan: '1 hour ago',  status: 'Enabled',  lastEdited: '1 week ago',  createdBy: 'Marlo Stanfield'    },
  { id: 11, name: 'Idle Device Purge',    description: 'Compliance Check',             type: 'Schedule', lastRan: '1 hour ago',  status: 'Disabled', lastEdited: '3 days ago',  createdBy: 'Stringer Bell'      },
  { id: 12, name: 'Low Disk Space Alert', description: 'A brief summary of the alert', type: 'Event',    lastRan: '1 hour ago',  status: 'Enabled',  lastEdited: '1 month ago', createdBy: 'Tommy Vercetti'     },
  { id: 13, name: 'Idle Device Purge',    description: 'Compliance Check',             type: 'Schedule', lastRan: '1 hour ago',  status: 'Disabled', lastEdited: '1 week ago',  createdBy: 'Carl Johnson'       },
  { id: 14, name: 'Low Disk Space Alert', description: 'A brief summary of the alert', type: 'Event',    lastRan: '1 hour ago',  status: 'Enabled',  lastEdited: '3 hours ago', createdBy: 'Niko Bellic'        },
  { id: 15, name: 'Idle Device Purge',    description: 'Compliance Check',             type: 'Schedule', lastRan: '1 hour ago',  status: 'Disabled', lastEdited: '1 day ago',   createdBy: 'John Marston'       },
];

// ─── Inline SVG icons ────────────────────────────────────────────────────────

const BoltIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CalendarIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8"  y1="2" x2="8"  y2="6" />
    <line x1="3"  y1="10" x2="21" y2="10" />
  </svg>
);

const PlusIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
  </svg>
);

const SearchIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
  </svg>
);

const FilterIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M7 8h10M10 12h4" />
  </svg>
);

const RefreshIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const ChevronDownIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronRightIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const GridIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
  </svg>
);

const ColumnsIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="3" width="7" height="18" rx="1" />
    <rect x="14" y="3" width="7" height="18" rx="1" />
  </svg>
);

const DownloadIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const XMarkIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CheckIcon = ({ className = 'w-3 h-3' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const SortIcon = ({ className = 'w-3 h-3' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 10l5-5 5 5H7zm0 4l5 5 5-5H7z" />
  </svg>
);

const WorkflowNodeIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="2" y="9" width="5" height="5" rx="1" />
    <rect x="9" y="2" width="5" height="5" rx="1" />
    <rect x="17" y="9" width="5" height="5" rx="1" />
    <rect x="9" y="16" width="5" height="5" rx="1" />
    <path d="M7 11.5h2M14 4.5h3v5M19 11.5h-2M11.5 9V7" strokeLinecap="round" />
  </svg>
);

const EmptyIllustration = () => (
  <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="20" width="90" height="65" rx="6" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
    <rect x="25" y="32" width="50" height="6" rx="3" fill="#cbd5e1" />
    <rect x="25" y="44" width="70" height="4" rx="2" fill="#e2e8f0" />
    <rect x="25" y="52" width="60" height="4" rx="2" fill="#e2e8f0" />
    <rect x="25" y="60" width="65" height="4" rx="2" fill="#e2e8f0" />
    <circle cx="90" cy="28" r="14" fill="#0d9488" />
    <path d="M84 28h12M90 22v12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatusToggle({
  status,
  onChange,
}: {
  status: WorkflowStatus;
  onChange: (s: WorkflowStatus) => void;
}) {
  const enabled = status === 'Enabled';
  return (
    <button
      onClick={() => onChange(enabled ? 'Disabled' : 'Enabled')}
      className={`relative inline-flex items-center w-12 h-6 rounded-full transition-colors focus:outline-none ${
        enabled ? 'bg-teal-600' : 'bg-gray-800'
      }`}
      aria-label={`Toggle status: currently ${status}`}
    >
      {/* Track icon */}
      <span className={`absolute inset-y-0 flex items-center transition-all ${enabled ? 'left-1.5' : 'right-1.5'}`}>
        {enabled ? (
          <CheckIcon className="w-2.5 h-2.5 text-white" />
        ) : (
          <XMarkIcon className="w-2.5 h-2.5 text-gray-400" />
        )}
      </span>
      {/* Thumb */}
      <span
        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-0.5'
        }`}
      />
    </button>
  );
}

function TypeBadge({ type }: { type: WorkflowType }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
      {type === 'Event' ? (
        <BoltIcon className="w-3.5 h-3.5 text-amber-500" />
      ) : (
        <CalendarIcon className="w-3.5 h-3.5 text-blue-500" />
      )}
      {type}
    </span>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: 'Get Started' },
  { label: 'Home' },
  { label: 'Alert', badge: 23, isNew: true },
  { label: 'User Management', hasChildren: true },
  { label: 'Device Management', hasChildren: true },
  { label: 'Access', hasChildren: true },
  { label: 'Workflows', hasChildren: true, active: true },
  { label: 'Security', hasChildren: true },
  { label: 'Insights', hasChildren: true },
  { label: 'Settings' },
];

function Sidebar() {
  return (
    <aside className="w-56 shrink-0 bg-gray-900 flex flex-col h-full overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-700">
        <div className="w-7 h-7 bg-teal-500 rounded flex items-center justify-center text-white font-bold text-sm">J</div>
        <span className="text-white font-semibold text-sm">jumpcloud</span>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors ${
              item.active
                ? 'bg-teal-600/20 text-teal-400 font-medium'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2 min-w-0">
              {item.label}
              {item.badge && (
                <span className="text-xs bg-gray-700 text-gray-300 rounded-full px-1.5 py-0.5 leading-none">
                  {item.badge}
                </span>
              )}
              {item.isNew && (
                <span className="text-xs bg-teal-500 text-white rounded px-1 py-0.5 leading-none font-semibold uppercase tracking-wide">
                  NEW
                </span>
              )}
            </span>
            {item.hasChildren && <ChevronRightIcon className="w-3.5 h-3.5 shrink-0 text-gray-500" />}
          </button>
        ))}
      </nav>

      {/* Footer hint */}
      <div className="px-4 py-3 border-t border-gray-700">
        <p className="text-xs text-gray-500">Having trouble with the new navigation?</p>
        <button className="text-xs text-teal-400 hover:underline mt-0.5">Check out the guide</button>
      </div>
    </aside>
  );
}

// ─── Top bar ─────────────────────────────────────────────────────────────────

function TopBar() {
  return (
    <header className="h-11 shrink-0 bg-white border-b border-gray-200 flex items-center px-4 gap-3">
      <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 max-w-sm">
        <SearchIcon className="w-4 h-4 text-gray-400 shrink-0" />
        <span className="text-sm text-gray-400">Search User, Devices, Apps, etc...</span>
        <span className="ml-auto text-xs text-gray-300 font-mono">⌘/Ctrl + K</span>
      </div>
      <div className="ml-auto flex items-center gap-3">
        {['🔔', '⚙️', '🚩', '☰'].map((icon, i) => (
          <button key={i} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-md text-sm">
            {icon}
          </button>
        ))}
      </div>
    </header>
  );
}

// ─── Add Workflow Modal ───────────────────────────────────────────────────────

interface AddWorkflowModalProps {
  onClose: () => void;
  onSubmit: (w: Omit<Workflow, 'id' | 'lastRan' | 'lastEdited'>) => void;
}

function AddWorkflowModal({ onClose, onSubmit }: AddWorkflowModalProps) {
  const [name, setName]     = useState('');
  const [type, setType]     = useState<WorkflowType>('Event');
  const [status, setStatus] = useState<WorkflowStatus>('Enabled');
  const [error, setError]   = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setError('Workflow name is required.'); return; }
    onSubmit({ name: name.trim(), description: 'A brief summary of the alert', type, status, createdBy: 'You' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-900">Add Workflow</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-100">
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Workflow Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setError(''); }}
              placeholder="e.g. Low Disk Space Alert"
              className={`w-full border rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${
                error ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
          </div>

          {/* Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Type</label>
            <div className="flex gap-3">
              {(['Event', 'Schedule'] as WorkflowType[]).map((t) => (
                <label
                  key={t}
                  className={`flex-1 flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition-colors ${
                    type === t
                      ? 'border-teal-500 bg-teal-50 text-teal-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="type"
                    value={t}
                    checked={type === t}
                    onChange={() => setType(t)}
                    className="sr-only"
                  />
                  {t === 'Event' ? (
                    <BoltIcon className="w-5 h-5 text-amber-500 shrink-0" />
                  ) : (
                    <CalendarIcon className="w-5 h-5 text-blue-500 shrink-0" />
                  )}
                  <div>
                    <p className="text-sm font-medium">{t}</p>
                    <p className="text-xs text-gray-400">
                      {t === 'Event' ? 'Triggered by a system event' : 'Runs on a set schedule'}
                    </p>
                  </div>
                  {type === t && (
                    <span className="ml-auto w-4 h-4 rounded-full bg-teal-500 flex items-center justify-center shrink-0">
                      <CheckIcon className="w-2.5 h-2.5 text-white" />
                    </span>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">Status</p>
              <p className="text-xs text-gray-400 mt-0.5">
                {status === 'Enabled' ? 'Workflow will run automatically' : 'Workflow is paused'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${status === 'Enabled' ? 'text-teal-600' : 'text-gray-400'}`}>
                {status}
              </span>
              <StatusToggle status={status} onChange={setStatus} />
            </div>
          </div>

          {/* Footer buttons */}
          <div className="flex justify-end gap-2 pt-1 border-t border-gray-100 -mx-6 px-6 mt-1">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
            >
              Create Workflow
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Empty State ─────────────────────────────────────────────────────────────

function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-24 gap-4">
      <EmptyIllustration />
      <div className="text-center">
        <h3 className="text-base font-semibold text-gray-800">No workflows yet</h3>
        <p className="text-sm text-gray-500 mt-1 max-w-xs">
          Automate repetitive tasks by creating your first workflow.
        </p>
      </div>
      <button
        onClick={onCreate}
        className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors"
      >
        <PlusIcon className="w-4 h-4" />
        Create Workflow
      </button>
    </div>
  );
}

// ─── Workflows Table ─────────────────────────────────────────────────────────

function WorkflowsTable({
  workflows,
  onToggleStatus,
}: {
  workflows: Workflow[];
  onToggleStatus: (id: number, s: WorkflowStatus) => void;
}) {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggleAll = (checked: boolean) => {
    setSelected(checked ? new Set(workflows.map((w) => w.id)) : new Set());
  };

  const toggleOne = (id: number) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };

  const allSelected = workflows.length > 0 && selected.size === workflows.length;

  const COL_HEADER = 'text-xs font-semibold text-gray-500 uppercase tracking-wide select-none';

  return (
    <div className="overflow-auto flex-1">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-white sticky top-0">
            <th className="w-10 px-4 py-3">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={(e) => toggleAll(e.target.checked)}
                className="w-4 h-4 accent-teal-600 cursor-pointer"
              />
            </th>
            {[
              { label: 'Name' },
              { label: 'Type' },
              { label: 'Last Ran' },
              { label: 'Status' },
              { label: 'Last edited' },
              { label: 'Created by' },
            ].map((col) => (
              <th key={col.label} className={`px-4 py-3 text-left ${COL_HEADER}`}>
                <span className="inline-flex items-center gap-1">
                  {col.label}
                  <SortIcon className="w-3 h-3 text-gray-400" />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {workflows.map((wf) => (
            <tr
              key={wf.id}
              className={`border-b border-gray-100 hover:bg-gray-50/60 transition-colors ${
                selected.has(wf.id) ? 'bg-teal-50/40' : ''
              }`}
            >
              <td className="px-4 py-3">
                <input
                  type="checkbox"
                  checked={selected.has(wf.id)}
                  onChange={() => toggleOne(wf.id)}
                  className="w-4 h-4 accent-teal-600 cursor-pointer"
                />
              </td>

              {/* Name */}
              <td className="px-4 py-3 min-w-[200px]">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 w-6 h-6 rounded bg-slate-100 flex items-center justify-center shrink-0">
                    <WorkflowNodeIcon className="w-3.5 h-3.5 text-slate-500" />
                  </span>
                  <div>
                    <p className="font-medium text-gray-900 leading-tight">{wf.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{wf.description}</p>
                  </div>
                </div>
              </td>

              {/* Type */}
              <td className="px-4 py-3 whitespace-nowrap">
                <TypeBadge type={wf.type} />
              </td>

              {/* Last Ran */}
              <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{wf.lastRan}</td>

              {/* Status */}
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <StatusToggle
                    status={wf.status}
                    onChange={(s) => onToggleStatus(wf.id, s)}
                  />
                  <span className={`text-sm ${wf.status === 'Enabled' ? 'text-teal-600' : 'text-gray-500'}`}>
                    {wf.status}
                  </span>
                </div>
              </td>

              {/* Last Edited */}
              <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{wf.lastEdited}</td>

              {/* Created By */}
              <td className="px-4 py-3 font-medium text-gray-700 whitespace-nowrap">{wf.createdBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function WorkflowsDashboard() {
  const [activeTab, setActiveTab]     = useState<'Overview' | 'Stats'>('Overview');
  const [showModal, setShowModal]     = useState(false);
  const [isEmpty, setIsEmpty]         = useState(false);
  const [search, setSearch]           = useState('');
  const [workflows, setWorkflows]     = useState<Workflow[]>(INITIAL_WORKFLOWS);

  const filtered = workflows.filter(
    (w) =>
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.createdBy.toLowerCase().includes(search.toLowerCase()),
  );

  const handleToggleStatus = (id: number, status: WorkflowStatus) => {
    setWorkflows((prev) => prev.map((w) => (w.id === id ? { ...w, status } : w)));
  };

  const handleAddWorkflow = (data: Omit<Workflow, 'id' | 'lastRan' | 'lastEdited'>) => {
    const next: Workflow = {
      ...data,
      id: workflows.length + 1,
      lastRan: 'Never',
      lastEdited: 'Just now',
    };
    setWorkflows((prev) => [next, ...prev]);
    if (isEmpty) setIsEmpty(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar />

        {/* Page content */}
        <main className="flex-1 flex flex-col min-h-0 overflow-hidden">

          {/* Page header */}
          <div className="px-6 pt-5 pb-0 border-b border-gray-200 bg-white shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Workflows</h1>
            <div className="flex gap-6">
              {(['Overview', 'Stats'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === tab
                      ? 'text-teal-600 border-teal-600'
                      : 'text-gray-500 border-transparent hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'Stats' ? (
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
              Stats coming soon
            </div>
          ) : (
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">

              {/* Toolbar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-white shrink-0 flex-wrap">
                {/* + Add button */}
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-700 transition-colors"
                >
                  <PlusIcon className="w-4 h-4" />
                  Add
                  <span className="border-l border-teal-500 pl-1.5 ml-0.5">
                    <ChevronDownIcon className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* Search */}
                <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-1.5 bg-white min-w-[200px]">
                  <SearchIcon className="w-4 h-4 text-gray-400 shrink-0" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className="text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none w-full"
                  />
                </div>

                {/* Icon buttons */}
                <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md" title="Filter">
                  <FilterIcon className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md" title="Refresh">
                  <RefreshIcon className="w-4 h-4" />
                </button>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Saved View dropdown */}
                <button className="flex items-center gap-1.5 border border-gray-200 rounded-md px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                  Saved View: Default*
                  <ChevronDownIcon className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {/* View toggles */}
                <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                  <button className="p-1.5 text-gray-500 hover:bg-gray-100 border-r border-gray-200" title="Grid view">
                    <GridIcon className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-gray-500 hover:bg-gray-100" title="Column view">
                    <ColumnsIcon className="w-4 h-4" />
                  </button>
                </div>

                <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md" title="Export">
                  <DownloadIcon className="w-4 h-4" />
                </button>

                {/* Dev toggle: empty state */}
                <button
                  onClick={() => setIsEmpty((v) => !v)}
                  className="ml-1 px-2 py-1 text-xs border border-dashed border-gray-300 text-gray-400 rounded hover:bg-gray-50 transition-colors"
                  title="Toggle empty state (dev only)"
                >
                  {isEmpty ? 'Show data' : 'Empty state'}
                </button>
              </div>

              {/* Content: table or empty state */}
              {isEmpty ? (
                <EmptyState onCreate={() => setShowModal(true)} />
              ) : (
                <WorkflowsTable
                  workflows={filtered}
                  onToggleStatus={handleToggleStatus}
                />
              )}
            </div>
          )}
        </main>
      </div>

      {/* Add Workflow Modal */}
      {showModal && (
        <AddWorkflowModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddWorkflow}
        />
      )}
    </div>
  );
}
