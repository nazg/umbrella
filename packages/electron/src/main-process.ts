
export class MainProcess {

  private constructor() { }

  public static run(name: String) {
    const instance = new MainProcess()
    console.log("name", name)
    return instance
  }

}
