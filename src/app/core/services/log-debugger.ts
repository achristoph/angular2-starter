export class LogDebugger {
  constructor(private enabled: boolean) {

  }

  debug(message: string) {
    if (this.enabled) {
      console.log(`DEBUG: ${message}`);
    }
  }
}
