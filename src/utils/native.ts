interface Params {
  os: string | null;
  version: string | null;
}

let params: Params;

export const loadParams = (): void => {
  const url = new URL(window.location.href);

  params = {
    os: url.searchParams.get('platformOs'),
    version: url.searchParams.get('platformVersion'),
  };
};

export const getParams = (): Params => {
  if (!params) {
    throw new Error('Native params not loaded.');
  }

  return params;
};


