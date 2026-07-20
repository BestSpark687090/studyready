// Shared localStorage helpers for StudyReady tools
const StudyStore = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* storage unavailable (private mode, quota) - fail silently */
    }
  },
  uid() {
    return Math.random().toString(36).slice(2, 10);
  }
};
