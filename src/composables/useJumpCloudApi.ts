import { ref, type Ref } from 'vue';

type JCRecord = Record<string, unknown>;

const API_KEY = import.meta.env.VITE_JUMPCLOUD_API_KEY as string;

function headers(extra: Record<string, string> = {}): Record<string, string> {
  return {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json',
    ...extra,
  };
}

async function request<T>(url: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: { ...headers(), ...(options.headers as Record<string, string>) },
  });
  if (!res.ok) {
    throw new Error(`JumpCloud API ${res.status}: ${res.statusText}`);
  }
  return res.json();
}

// ─── V1 Endpoints ───

export function useSystemUsers() {
  const users: Ref<JCRecord[]> = ref([]);
  const totalCount = ref(0);
  const loading = ref(false);
  const error: Ref<string | null> = ref(null);

  async function fetch(limit = 100, skip = 0) {
    loading.value = true;
    error.value = null;
    try {
      const data = await request<{ results: JCRecord[]; totalCount: number }>(
        `/jcapi/v1/systemusers?limit=${limit}&skip=${skip}`,
      );
      users.value = data.results ?? [];
      totalCount.value = data.totalCount ?? 0;
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : String(e);
    } finally {
      loading.value = false;
    }
  }

  return { users, totalCount, loading, error, fetch };
}

export function useSystems() {
  const systems: Ref<JCRecord[]> = ref([]);
  const totalCount = ref(0);
  const loading = ref(false);
  const error: Ref<string | null> = ref(null);

  async function fetch(limit = 100, skip = 0) {
    loading.value = true;
    error.value = null;
    try {
      const data = await request<{ results: JCRecord[]; totalCount: number }>(
        `/jcapi/v1/systems?limit=${limit}&skip=${skip}`,
      );
      systems.value = data.results ?? [];
      totalCount.value = data.totalCount ?? 0;
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : String(e);
    } finally {
      loading.value = false;
    }
  }

  return { systems, totalCount, loading, error, fetch };
}

// ─── V2 Endpoints ───

export function useUserGroups() {
  const groups: Ref<JCRecord[]> = ref([]);
  const loading = ref(false);
  const error: Ref<string | null> = ref(null);

  async function fetch(limit = 100, skip = 0) {
    loading.value = true;
    error.value = null;
    try {
      groups.value = await request<JCRecord[]>(
        `/jcapi/v2/usergroups?limit=${limit}&skip=${skip}`,
      );
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : String(e);
    } finally {
      loading.value = false;
    }
  }

  return { groups, loading, error, fetch };
}

export function useSystemGroups() {
  const groups: Ref<JCRecord[]> = ref([]);
  const loading = ref(false);
  const error: Ref<string | null> = ref(null);

  async function fetch(limit = 100, skip = 0) {
    loading.value = true;
    error.value = null;
    try {
      groups.value = await request<JCRecord[]>(
        `/jcapi/v2/systemgroups?limit=${limit}&skip=${skip}`,
      );
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : String(e);
    } finally {
      loading.value = false;
    }
  }

  return { groups, loading, error, fetch };
}

export function useApplications() {
  const applications: Ref<JCRecord[]> = ref([]);
  const loading = ref(false);
  const error: Ref<string | null> = ref(null);

  async function fetch(limit = 100, skip = 0) {
    loading.value = true;
    error.value = null;
    try {
      applications.value = await request<JCRecord[]>(
        `/jcapi/v2/applications?limit=${limit}&skip=${skip}`,
      );
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : String(e);
    } finally {
      loading.value = false;
    }
  }

  return { applications, loading, error, fetch };
}

export function usePolicies() {
  const policies: Ref<JCRecord[]> = ref([]);
  const loading = ref(false);
  const error: Ref<string | null> = ref(null);

  async function fetch(limit = 100, skip = 0) {
    loading.value = true;
    error.value = null;
    try {
      policies.value = await request<JCRecord[]>(
        `/jcapi/v2/policies?limit=${limit}&skip=${skip}`,
      );
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : String(e);
    } finally {
      loading.value = false;
    }
  }

  return { policies, loading, error, fetch };
}

// ─── Directory Insights ───

export function useDirectoryInsights() {
  const events: Ref<JCRecord[]> = ref([]);
  const loading = ref(false);
  const error: Ref<string | null> = ref(null);

  async function fetch(
    service: string[] = ['all'],
    days = 7,
    limit = 100,
  ) {
    loading.value = true;
    error.value = null;
    const endTime = new Date().toISOString();
    const startTime = new Date(Date.now() - days * 86400000).toISOString();
    try {
      events.value = await request<JCRecord[]>('/jcapi/insights/events', {
        method: 'POST',
        body: JSON.stringify({
          service,
          start_time: startTime,
          end_time: endTime,
          limit,
          sort: 'DESC',
        }),
      });
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : String(e);
    } finally {
      loading.value = false;
    }
  }

  return { events, loading, error, fetch };
}

// ─── Utility: check if API key is configured ───

export function useApiKeyStatus() {
  const isConfigured = Boolean(API_KEY && API_KEY.length > 0);
  return { isConfigured, maskedKey: isConfigured ? `${API_KEY.slice(0, 8)}...` : '(not set)' };
}
