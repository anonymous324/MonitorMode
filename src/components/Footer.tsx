export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">MonitorRemotely</span>. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-muted-foreground/60">
          Disclaimer: This service is intended for legal use only. Users are responsible for complying with all applicable laws.
        </p>
      </div>
    </footer>
  );
}
