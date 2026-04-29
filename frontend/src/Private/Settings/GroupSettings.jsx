
export default function GroupSettings() {
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-xl font-semibold">Group Settings</h1>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Allow group invites
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Mute group notifications
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Show recommended groups
      </label>
    </div>
  );
}

