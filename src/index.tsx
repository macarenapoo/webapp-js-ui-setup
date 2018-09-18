(window as any).UbExpUI = class {
  public init() {
    alert('Hello World');
    const container: HTMLElement | null = document.getElementById('ub-exp-ui');
    container ? (container.innerHTML = 'Hello World') : null;
  }
};
