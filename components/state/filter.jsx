import {atom} from 'recoil';

export const filterState = atom({
  key: 'filterState',
  default: {
    Star_Wars: false,
    Superheroes: false,
    Game_of_Thrones: false,
    Mario_Bros: false,
    Marvel: false,
    Doctor_Who: false,
    Harry_Potter: false,
    Zelda: false,
    Star_Trek: false,
    Big_Bang_Theory: false,
    Frikie: false,
    Camiseta: false,
  },
});
