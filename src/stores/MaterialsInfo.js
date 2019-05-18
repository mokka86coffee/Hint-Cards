const Materials = {
  Git: [
    {
      title: `Отменить 'add .'`,
      text: `{1) Первый способ задать url репозитория:} использовать команду [git remote set-url origin], например:
      [git remote set-url origin git@github.com:vicman-wi/wi-backend.git]`
    }
  ]
};

export default function fetchMaterials(name) {
  if (name) {
    return new Promise(r => setTimeout(() => r(Materials[name]), 200));
  }

  return new Promise(r => setTimeout(() => r(Materials), 200));
}
