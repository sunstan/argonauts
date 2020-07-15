export class GetArgonauts {
  static readonly type = '[Argonauts] Get';
}

export class AddArgonaut {
  static readonly type = '[Argonauts] Add One';
  constructor(public name: string) {
  }
}

export class UpdateArgonaut {
    static readonly type = '[Argonauts] Update One';
    constructor(public id: number, public name: string) {
    }
}

export class DeleteArgonaut {
  static readonly type = '[Argonauts] Delete One';
  constructor(public id: number) {
  }
}
