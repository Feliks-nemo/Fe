const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
//1 - Символ
//2 - Название
//3 - Ar
//4 - Порядковый номер

input1.addEventListener('input', () => {
      if (input1.value === 'H') {
        input2.value = 'Водород';
        input3.value = '≈1';
        input4.value = '1';
    }

    if (input1.value === 'He') {
        input2.value = 'Гелий';
        input3.value = '≈4';
        input4.value = '2';
    }

    if (input1.value === 'Li') {
        input2.value = 'Литий';
        input3.value = '≈7';
        input4.value = '3';
    }

    if (input1.value === 'Be') {
        input2.value = 'Бериллий';
        input3.value = '≈9';
        input4.value = '4';
    }

    if (input1.value === 'B') {
        input2.value = 'Бор';
        input3.value = '≈11';
        input4.value = '5';
    }

    if (input1.value === 'C') {
        input2.value = 'Углерод';
        input3.value = '≈12';
        input4.value = '6';
    }

    if (input1.value === 'N') {
        input2.value = 'Азот';
        input3.value = '≈14';
        input4.value = '7';
    }

    if (input1.value === 'O') {
        input2.value = 'Кислород';
        input3.value = '≈16';
        input4.value = '8';
    }

    if (input1.value === 'F') {
        input2.value = 'Фтор';
        input3.value = '≈19';
        input4.value = '9';
    }

    if (input1.value === 'Ne') {
        input2.value = 'Неон';
        input3.value = '≈20';
        input4.value = '10';
    }

    if (input1.value === 'Na') {
        input2.value = 'Натрий';
        input3.value = '≈23';
        input4.value = '11';
    }

    if (input1.value === 'Mg') {
        input2.value = 'Магний';
        input3.value = '≈24';
        input4.value = '12';
    }

    if (input1.value === 'Al') {
        input2.value = 'Алюминий';
        input3.value = '≈27';
        input4.value = '13';
    }

    if (input1.value === 'Si') {
        input2.value = 'Кремний';
        input3.value = '≈28';
        input4.value = '14';
    }

    if (input1.value === 'P') {
        input2.value = 'Фосфор';
        input3.value = '≈31';
        input4.value = '15';
    }

    if (input1.value === 'S') {
        input2.value = 'Сера';
        input3.value = '≈32';
        input4.value = '16';
    }

    if (input1.value === 'Cl') {
        input2.value = 'Хлор';
        input3.value = '≈35,5';
        input4.value = '17';
    }

    if (input1.value === 'Ar') {
        input2.value = 'Аргон';
        input3.value = '≈40';
        input4.value = '18';
    }

    if (input1.value === 'K') {
        input2.value = 'Калий';
        input3.value = '≈39';
        input4.value = '19';
    }

    if (input1.value === 'Ca') {
        input2.value = 'Кальций';
        input3.value = '≈40';
        input4.value = '20';
    }

    if (input1.value === 'Sc') {
        input2.value = 'Скандий';
        input3.value = '≈45';
        input4.value = '21';
    }

    if (input1.value === 'Ti') {
        input2.value = 'Титан';
        input3.value = '≈48';
        input4.value = '22';
    }

    if (input1.value === 'V') {
        input2.value = 'Ванадий';
        input3.value = '≈51';
        input4.value = '23';
    }

    if (input1.value === 'Cr') {
        input2.value = 'Хром';
        input3.value = '≈52';
        input4.value = '24';
    }

    if (input1.value === 'Mn') {
        input2.value = 'Марганец';
        input3.value = '≈55';
        input4.value = '25';
    }

    if (input1.value === 'Fe') {
        input2.value = 'Железо';
        input3.value = '≈56';
        input4.value = '26';
    }

    if (input1.value === 'Co') {
        input2.value = 'Кобальт';
        input3.value = '≈59';
        input4.value = '27';
    }

    if (input1.value === 'Ni') {
        input2.value = 'Никель';
        input3.value = '≈59';
        input4.value = '28';
    }

    if (input1.value === 'Cu') {
        input2.value = 'Медь';
        input3.value = '≈64';
        input4.value = '29';
    }

    if (input1.value === 'Zn') {
        input2.value = 'Цинк';
        input3.value = '≈65';
        input4.value = '30';
    }

    if (input1.value === 'Ga') {
        input2.value = 'Галлий';
        input3.value = '≈70';
        input4.value = '31';
    }

    if (input1.value === 'Ge') {
        input2.value = 'Германий';
        input3.value = '≈73';
        input4.value = '32';
    }

    if (input1.value === 'As') {
        input2.value = 'Мышьяк';
        input3.value = '≈75';
        input4.value = '33';
    }

    if (input1.value === 'Se') {
        input2.value = 'Селен';
        input3.value = '≈79';
        input4.value = '34';
    }

    if (input1.value === 'Br') {
        input2.value = 'Бром';
        input3.value = '≈80';
        input4.value = '35';
    }

    if (input1.value === 'Kr') {
        input2.value = 'Криптон';
        input3.value = '≈84';
        input4.value = '36';
    }

    if (input1.value === 'Rb') {
        input2.value = 'Рубидий';
        input3.value = '≈85';
        input4.value = '37';
    }

    if (input1.value === 'Sr') {
        input2.value = 'Стронций';
        input3.value = '≈88';
        input4.value = '38';
    }

    if (input1.value === 'Y') {
        input2.value = 'Иттрий';
        input3.value = '≈89';
        input4.value = '39';
    }

    if (input1.value === 'Zr') {
        input2.value = 'Цирконий';
        input3.value = '≈91';
        input4.value = '40';
    }

    if (input1.value === 'Nb') {
        input2.value = 'Ниобий';
        input3.value = '≈93';
        input4.value = '41';
    }

    if (input1.value === 'Mo') {
        input2.value = 'Молибден';
        input3.value = '≈96';
        input4.value = '42';
    }

    if (input1.value === 'Tc') {
        input2.value = 'Технеций';
        input3.value = '≈98';
        input4.value = '43';
    }

    if (input1.value === 'Ru') {
        input2.value = 'Рутений';
        input3.value = '≈101 ';
        input4.value = '44';
    }

    if (input1.value === 'Rh') {
        input2.value = 'Родий';
        input3.value = '≈103';
        input4.value = '45';
    }

    if (input1.value === 'Pd') {
        input2.value = 'Палладий';
        input3.value = '≈106';
        input4.value = '46';
    }

    if (input1.value === 'Ag') {
        input2.value = 'Серебро';
        input3.value = '≈108';
        input4.value = '47';
    }

    if (input1.value === 'Cd') {
        input2.value = 'Кадмий';
        input3.value = '≈112';
        input4.value = '48';
    }

    if (input1.value === 'In') {
        input2.value = 'Индий';
        input3.value = '≈115';
        input4.value = '49';
    }

    if (input1.value === 'Sn') {
        input2.value = 'Олово';
        input3.value = '≈119';
        input4.value = '50';
    }

    if (input1.value === 'Sb') {
        input2.value = 'Сурьма';
        input3.value = '≈122';
        input4.value = '51';
    }

    if (input1.value === 'Te') {
        input2.value = 'Теллур';
        input3.value = '≈128';
        input4.value = '52';
    }

    if (input1.value === 'I') {
        input2.value = 'Йод';
        input3.value = '≈127';
        input4.value = '53';
    }

    if (input1.value === 'Xe') {
        input2.value = 'Ксенон';
        input3.value = '≈131';
        input4.value = '54';
    }

    if (input1.value === 'Cs') {
        input2.value = 'Цезий';
        input3.value = '≈133';
        input4.value = '55';
    }

    if (input1.value === 'Ba') {
        input2.value = 'Барий';
        input3.value = '≈137';
        input4.value = '56';
    }

    if (input1.value === 'La') {
        input2.value = 'Лантан';
        input3.value = '≈139';
        input4.value = '57';
    }

    if (input1.value === 'Ce') {
        input2.value = 'Церий';
        input3.value = '≈16';
        input4.value = '141';
    }

    if (input1.value === 'Pr') {
        input2.value = 'Празеодим';
        input3.value = '≈141';
        input4.value = '59';
    }

    if (input1.value === 'Nd') {
        input2.value = 'Неодин';
        input3.value = '≈144';
        input4.value = '60';
    }

    if (input1.value === 'Pm') {
        input2.value = 'Прометий';
        input3.value = '≈145';
        input4.value = '61';
    }

    if (input1.value === 'Sm') {
        input2.value = 'Самарий';
        input3.value = '≈150';
        input4.value = '62';
    }

    if (input1.value === 'Eu') {
        input2.value = 'Европий';
        input3.value = '≈152';
        input4.value = '63';
    }

    if (input1.value === 'Gd') {
        input2.value = 'Гадолиний';
        input3.value = '≈157';
        input4.value = '64';
    }

    if (input1.value === 'Tb') {
        input2.value = 'Тербий';
        input3.value = '≈159';
        input4.value = '65';
    }

    if (input1.value === 'Dy') {
        input2.value = 'Диспрозий';
        input3.value = '≈163';
        input4.value = '66';
    }

    if (input1.value === 'Ho') {
        input2.value = 'Гольмий';
        input3.value = '≈165';
        input4.value = '67';
    }

    if (input1.value === 'Er') {
        input2.value = 'Эрбий';
        input3.value = '≈167';
        input4.value = '68';
    }

    if (input1.value === 'Tm') {
        input2.value = 'Тулий';
        input3.value = '≈169';
        input4.value = '69';
    }

    if (input1.value === 'Yb') {
        input2.value = 'Иттербий';
        input3.value = '≈173';
        input4.value = '70';
    }

    if (input1.value === 'Lu') {
        input2.value = 'Лютеций';
        input3.value = '≈175';
        input4.value = '71';
    }

    if (input1.value === 'Hf') {
        input2.value = 'Гафний';
        input3.value = '≈178';
        input4.value = '72';
    }

    if (input1.value === 'Ta') {
        input2.value = 'Тантал';
        input3.value = '≈181';
        input4.value = '73';
    }

    if (input1.value === 'W') {
        input2.value = 'Вольфрам';
        input3.value = '≈184';
        input4.value = '74';
    }

    if (input1.value === 'Re') {
        input2.value = 'Рений';
        input3.value = '≈186';
        input4.value = '75';
    }

    if (input1.value === 'Os') {
        input2.value = 'Осмий';
        input3.value = '≈190';
        input4.value = '76';
    }

    if (input1.value === 'Ir') {
        input2.value = 'Иридий';
        input3.value = '≈192';
        input4.value = '77';
    }

    if (input1.value === 'Pt') {
        input2.value = 'Платина';
        input3.value = '≈195';
        input4.value = '78';
    }

    if (input1.value === 'Au') {
        input2.value = 'Золото';
        input3.value = '≈197';
        input4.value = '79';
    }

    if (input1.value === 'Hg') {
        input2.value = 'Ртуть';
        input3.value = '≈201';
        input4.value = '80';
    }

    if (input1.value === 'Tl') {
        input2.value = 'Талий';
        input3.value = '≈204';
        input4.value = '81';
    }

    if (input1.value === 'Pb') {
        input2.value = 'Свинец';
        input3.value = '≈207';
        input4.value = '82';
    }

    if (input1.value === 'Bi') {
        input2.value = 'Висмут';
        input3.value = '≈209';
        input4.value = '83';
    }

    if (input1.value === 'Po') {
        input2.value = 'Полоний';
        input3.value = '≈209';
        input4.value = '84';
    }

    if (input1.value === 'At') {
        input2.value = 'Астат';
        input3.value = '≈210';
        input4.value = '85';
    }

    if (input1.value === 'Rn') {
        input2.value = 'Радон';
        input3.value = '≈222';
        input4.value = '86';
    }

    if (input1.value === 'Fr') {
        input2.value = 'Франций';
        input3.value = '≈223';
        input4.value = '87';
    }

    if (input1.value === 'Ra') {
        input2.value = 'Радий';
        input3.value = '≈226';
        input4.value = '88';
    }

    if (input1.value === 'Ac') {
        input2.value = 'Актиний';
        input3.value = '≈227';
        input4.value = '89';
    }

    if (input1.value === 'Th') {
        input2.value = 'Торий';
        input3.value = '≈232';
        input4.value = '90';
    }

    if (input1.value === 'Pa') {
        input2.value = 'Протактиний';
        input3.value = '≈231';
        input4.value = '91';
    }

    if (input1.value === 'U') {
        input2.value = 'Уран';
        input3.value = '≈238';
        input4.value = '92';
    }

    if (input1.value === 'Np') {
        input2.value = 'Нептуний';
        input3.value = '≈237';
        input4.value = '93';
    }

    if (input1.value === 'Pu') {
        input2.value = 'Плутоний';
        input3.value = '≈237';
        input4.value = '94';
    }

    if (input1.value === 'Am') {
        input2.value = 'Америций';
        input3.value = '≈243';
        input4.value = '95';
    }

    if (input1.value === 'Cm') {
        input2.value = 'Кюрий';
        input3.value = '≈247';
        input4.value = '96';
    }

    if (input1.value === 'Bk') {
        input2.value = 'Берклий';
        input3.value = '≈247';
        input4.value = '97';
    }

    if (input1.value === 'Cf') {
        input2.value = 'Калифорний';
        input3.value = '≈241';
        input4.value = '98';
    }

    if (input1.value === 'Es') {
        input2.value = 'Эйнштейний';
        input3.value = '≈252';
        input4.value = '99';
    }

    if (input1.value === 'Fm') {
        input2.value = 'Фермий';
        input3.value = '≈257';
        input4.value = '100';
    }

    if (input1.value === 'Md') {
        input2.value = 'Менделевий';
        input3.value = '≈258';
        input4.value = '101';
    }

    if (input1.value === 'No') {
        input2.value = 'Нобелий';
        input3.value = '≈259';
        input4.value = '102';
    }

    if (input1.value === 'Lr') {
        input2.value = 'Лоуренский';
        input3.value = '≈260';
        input4.value = '103';
    }

    if (input1.value === 'Rf') {
        input2.value = 'Резерфордий';
        input3.value = '≈261';
        input4.value = '104';
    }

    if (input1.value === 'Db') {
        input2.value = 'Дубний';
        input3.value = '≈262';
        input4.value = '105';
    }

    if (input1.value === 'Sg') {
        input2.value = 'Сиборгий';
        input3.value = '≈266';
        input4.value = '106';
    }

    if (input1.value === 'Bh') {
        input2.value = 'Борий';
        input3.value = '≈267';
        input4.value = '107';
    }

    if (input1.value === 'Hs') {
        input2.value = 'Хассий';
        input3.value = '≈269';
        input4.value = '108';
    }

    if (input1.value === 'Mt') {
        input2.value = 'Мейнтнерий';
        input3.value = '≈268';
        input4.value = '109';
    }
    if (input1.value === 'Ds') {
        input2.value = 'Дармштадтий';
        input3.value = '≈271';
        input4.value = '110';
    }

    if (input1.value === 'Rg') {
        input2.value = 'Рентгений';
        input3.value = '≈282';
        input4.value = '111';
    }

    if (input1.value === 'Cn') {
        input2.value = 'Коперниций';
        input3.value = '≈285';
        input4.value = '112';
    }

    if (input1.value === 'Nh') {
        input2.value = 'Нихоний';
        input3.value = '≈286';
        input4.value = '113';
    }

    if (input1.value === 'Fl') {
        input2.value = 'Флеровий';
        input3.value = '≈289';
        input4.value = '114';
    }

    if (input1.value === 'Mc') {
        input2.value = 'Московий';
        input3.value = '≈288';
        input4.value = '115';
    }

    if (input1.value === 'Lv') {
        input2.value = 'Ливерморий';
        input3.value = '≈293';
        input4.value = '116';
    }

    if (input1.value === 'Ts') {
        input2.value = 'Теннессин';
        input3.value = '≈294';
        input4.value = '117';
    }

    if (input1.value === 'Og') {
        input2.value = 'оганесон';
        input3.value = '≈294';
        input4.value = '118';
    } 
});

input2.addEventListener('input', () => {
  if (input2.value === 'Водород') {
    input1.value = 'H';
    input3.value = '≈1';
    input4.value = '1';
}

if (input2.value === 'Гелий') {
    input1.value = 'He';
    input3.value = '≈4';
    input4.value = '2';
}

if (input2.value === 'Литий') {
    input1.value = 'Li';
    input3.value = '≈7';
    input4.value = '3';
}

if (input2.value === 'Бериллий') {
    input1.value = 'Be';
    input3.value = '≈9';
    input4.value = '4';
}

if (input2.value === 'Бор') {
    input1.value = 'B';
    input3.value = '≈11';
    input4.value = '5';
}

if (input2.value === 'Углерод') {
    input1.value = 'C';
    input3.value = '≈12';
    input4.value = '6';
}

if (input2.value === 'Азот') {
    input1.value = 'N';
    input3.value = '≈14';
    input4.value = '7';
}

if (input2.value === 'Кислород') {
    input1.value = 'O';
    input3.value = '≈16';
    input4.value = '8';
}

if (input2.value === 'Фтор') {
    input1.value = 'F';
    input3.value = '≈19';
    input4.value = '9';
}

if (input2.value === 'Неон') {
    input1.value = 'Ne';
    input3.value = '≈20';
    input4.value = '10';
}

if (input2.value === 'Натрий') {
    input1.value = 'Na';
    input3.value = '≈23';
    input4.value = '11';
}

if (input2.value === 'Магний') {
    input1.value = 'Mg';
    input3.value = '≈24';
    input4.value = '12';
}

if (input2.value === 'Алюминий') {
    input1.value = 'Al';
    input3.value = '≈27';
    input4.value = '13';
}

if (input2.value === 'Кремний') {
    input1.value = 'Si';
    input3.value = '≈28';
    input4.value = '14';
}

if (input2.value === 'Фосфор') {
    input1.value = 'P';
    input3.value = '≈31';
    input4.value = '15';
}

if (input2.value === 'Сера') {
    input1.value = 'S';
    input3.value = '≈32';
    input4.value = '16';
}

if (input2.value === 'Хлор') {
    input1.value = 'Cl';
    input3.value = '≈35,5';
    input4.value = '17';
}

if (input2.value === 'Аргон') {
    input1.value = 'Ar';
    input3.value = '≈40';
    input4.value = '18';
}

if (input2.value === 'Калий') {
    input1.value = 'K';
    input3.value = '≈39';
    input4.value = '19';
}

if (input2.value === 'Кальций') {
    input1.value = 'Ca';
    input3.value = '≈40';
    input4.value = '20';
}

if (input2.value === 'Скандий') {
    input1.value = 'Sc';
    input3.value = '≈45';
    input4.value = '21';
}

if (input2.value === 'Титан') {
    input1.value = 'Ti';
    input3.value = '≈48';
    input4.value = '22';
}

if (input2.value === 'Ванадий') {
    input1.value = 'V';
    input3.value = '≈51';
    input4.value = '23';
}

if (input2.value === 'Хром') {
    input1.value = 'Cr';
    input3.value = '≈52';
    input4.value = '24';
}

if (input2.value === 'Марганец') {
    input1.value = 'Mn';
    input3.value = '≈55';
    input4.value = '25';
}

if (input2.value === 'Железо') {
    input1.value = 'Fe';
    input3.value = '≈56';
    input4.value = '26';
}

if (input2.value === 'Кобальт') {
    input1.value = 'Co';
    input3.value = '≈59';
    input4.value = '27';
}

if (input2.value === 'Никель') {
    input1.value = 'Ni';
    input3.value = '≈59';
    input4.value = '28';
}

if (input2.value === 'Медь') {
    input1.value = 'Cu';
    input3.value = '≈64';
    input4.value = '29';
}

if (input2.value === 'Цинк') {
    input1.value = 'Zn';
    input3.value = '≈65';
    input4.value = '30';
}

if (input2.value === 'Галлий') {
    input1.value = 'Ga';
    input3.value = '≈70';
    input4.value = '31';
}

if (input2.value === 'Германий') {
    input1.value = 'Ge';
    input3.value = '≈73';
    input4.value = '32';
}

if (input2.value === 'Мышьяк') {
    input1.value = 'As';
    input3.value = '≈75';
    input4.value = '33';
}

if (input2.value === 'Селен') {
    input1.value = 'Se';
    input3.value = '≈79';
    input4.value = '34';
}

if (input2.value === 'Бром') {
    input1.value = 'Br';
    input3.value = '≈80';
    input4.value = '35';
}

if (input2.value === 'Криптон') {
    input1.value = 'Kr';
    input3.value = '≈84';
    input4.value = '36';
}

if (input2.value === 'Рубидий') {
    input1.value = 'Rb';
    input3.value = '≈85';
    input4.value = '37';
}

if (input2.value === 'Стронций') {
    input1.value = 'Sr';
    input3.value = '≈88';
    input4.value = '38';
}

if (input2.value === 'Иттрий') {
    input1.value = 'Y';
    input3.value = '≈89';
    input4.value = '39';
}

if (input2.value === 'Цирконий') {
    input1.value = 'Zr';
    input3.value = '≈91';
    input4.value = '40';
}

if (input2.value === 'Ниобий') {
    input1.value = 'Nb';
    input3.value = '≈93';
    input4.value = '41';
}

if (input2.value === 'Молибден') {
    input1.value = 'Mo';
    input3.value = '≈96';
    input4.value = '42';
}

if (input2.value === 'Технеций') {
    input1.value = 'Tc';
    input3.value = '≈98';
    input4.value = '43';
}

if (input2.value === 'Рутений') {
    input1.value = 'Ru';
    input3.value = '≈101 ';
    input4.value = '44';
}

if (input2.value === 'Родий') {
    input1.value = 'Rh';
    input3.value = '≈103';
    input4.value = '45';
}

if (input2.value === 'Палладий') {
    input1.value = 'Pd';
    input3.value = '≈106';
    input4.value = '46';
}

if (input2.value === 'Серебро') {
    input1.value = 'Ag';
    input3.value = '≈108';
    input4.value = '47';
}

if (input2.value === 'Кадмий') {
    input1.value = 'Cd';
    input3.value = '≈112';
    input4.value = '48';
}

if (input2.value === 'Индий') {
    input1.value = 'In';
    input3.value = '≈115';
    input4.value = '49';
}

if (input2.value === 'Олово') {
    input1.value = 'Sn';
    input3.value = '≈119';
    input4.value = '50';
}

if (input2.value === 'Сурьма') {
    input1.value = 'Sb';
    input3.value = '≈122';
    input4.value = '51';
}

if (input2.value === 'Теллур') {
    input1.value = 'Te';
    input3.value = '≈128';
    input4.value = '52';
}

if (input2.value === 'Йод') {
    input1.value = 'I';
    input3.value = '≈127';
    input4.value = '53';
}

if (input2.value === 'Ксенон') {
    input1.value = 'Xe';
    input3.value = '≈131';
    input4.value = '54';
}

if (input2.value === 'Цезий') {
    input1.value = 'Cs';
    input3.value = '≈133';
    input4.value = '55';
}

if (input2.value === 'Барий') {
    input1.value = 'Ba';
    input3.value = '≈137';
    input4.value = '56';
}

if (input2.value === 'Лантан') {
    input1.value = 'La';
    input3.value = '≈139';
    input4.value = '57';
}

if (input2.value === 'Церий') {
    input1.value = 'Ce';
    input3.value = '≈16';
    input4.value = '141';
}

if (input2.value === 'Празеодим') {
    input1.value = 'Pr';
    input3.value = '≈141';
    input4.value = '59';
}

if (input2.value === 'Неодин') {
    input1.value = 'Nd';
    input3.value = '≈144';
    input4.value = '60';
}

if (input2.value === 'Прометий') {
    input1.value = 'Pm';
    input3.value = '≈145';
    input4.value = '61';
}

if (input2.value === 'Самарий') {
    input1.value = 'Sm';
    input3.value = '≈150';
    input4.value = '62';
}

if (input2.value === 'Европий') {
    input1.value = 'Eu';
    input3.value = '≈152';
    input4.value = '63';
}

if (input2.value === 'Гадолиний') {
    input1.value = 'Gd';
    input3.value = '≈157';
    input4.value = '64';
}

if (input2.value === 'Тербий') {
    input1.value = 'Tb';
    input3.value = '≈159';
    input4.value = '65';
}

if (input2.value === 'Диспрозий') {
    input1.value = 'Dy';
    input3.value = '≈163';
    input4.value = '66';
}

if (input2.value === 'Гольмий') {
    input1.value = 'Ho';
    input3.value = '≈165';
    input4.value = '67';
}

if (input2.value === 'Эрбий') {
    input1.value = 'Er';
    input3.value = '≈167';
    input4.value = '68';
}

if (input2.value === 'Тулий') {
    input1.value = 'Tm';
    input3.value = '≈169';
    input4.value = '69';
}

if (input2.value === 'Иттербий') {
    input1.value = 'Yb';
    input3.value = '≈173';
    input4.value = '70';
}

if (input2.value === 'Лютеций') {
    input1.value = 'Lu';
    input3.value = '≈175';
    input4.value = '71';
}

if (input2.value === 'Гафний') {
    input1.value = 'Hf';
    input3.value = '≈178';
    input4.value = '72';
}

if (input2.value === 'Тантал') {
    input1.value = 'Ta';
    input3.value = '≈181';
    input4.value = '73';
}

if (input2.value === 'Вольфрам') {
    input1.value = 'W';
    input3.value = '≈184';
    input4.value = '74';
}

if (input2.value === 'Рений') {
    input1.value = 'Re';
    input3.value = '≈186';
    input4.value = '75';
}

if (input2.value === 'Осмий') {
    input1.value = 'Os';
    input3.value = '≈190';
    input4.value = '76';
}

if (input2.value === 'Иридий') {
    input1.value = 'Ir';
    input3.value = '≈192';
    input4.value = '77';
}

if (input2.value === 'Платина') {
    input1.value = 'Pt';
    input3.value = '≈195';
    input4.value = '78';
}

if (input2.value === 'Золото') {
    input1.value = 'Au';
    input3.value = '≈197';
    input4.value = '79';
}

if (input2.value === 'Ртуть') {
    input1.value = 'Hg';
    input3.value = '≈201';
    input4.value = '80';
}

if (input2.value === 'Талий') {
    input1.value = 'Tl';
    input3.value = '≈204';
    input4.value = '81';
}

if (input2.value === 'Свинец') {
    input1.value = 'Pb';
    input3.value = '≈207';
    input4.value = '82';
}

if (input2.value === 'Висмут') {
    input1.value = 'Bi';
    input3.value = '≈209';
    input4.value = '83';
}

if (input2.value === 'Полоний') {
    input1.value = 'Po';
    input3.value = '≈209';
    input4.value = '84';
}

if (input2.value === 'Астат') {
    input1.value = 'At';
    input3.value = '≈210';
    input4.value = '85';
}

if (input2.value === 'Радон') {
    input1.value = 'Rn';
    input3.value = '≈222';
    input4.value = '86';
}

if (input2.value === 'Франций') {
    input1.value = 'Fr';
    input3.value = '≈223';
    input4.value = '87';
}

if (input2.value === 'Радий') {
    input1.value = 'Ra';
    input3.value = '≈226';
    input4.value = '88';
}

if (input2.value === 'Актиний') {
    input1.value = 'Ac';
    input3.value = '≈227';
    input4.value = '89';
}

if (input2.value === 'Торий') {
    input1.value = 'Th';
    input3.value = '≈232';
    input4.value = '90';
}

if (input2.value === 'Протактиний') {
    input1.value = 'Pa';
    input3.value = '≈231';
    input4.value = '91';
}

if (input2.value === 'Уран') {
    input1.value = 'U';
    input3.value = '≈238';
    input4.value = '92';
}

if (input2.value === 'Нептуний') {
    input1.value = 'Np';
    input3.value = '≈237';
    input4.value = '93';
}

if (input2.value === 'Плутоний') {
    input1.value = 'Pu';
    input3.value = '≈237';
    input4.value = '94';
}

if (input2.value === 'Америций') {
    input1.value = 'Am';
    input3.value = '≈243';
    input4.value = '95';
}

if (input2.value === 'Кюрий') {
    input1.value = 'Cm';
    input3.value = '≈247';
    input4.value = '96';
}

if (input2.value === 'Берклий') {
    input1.value = 'Bk';
    input3.value = '≈247';
    input4.value = '97';
}

if (input2.value === 'Калифорний') {
    input1.value = 'Cf';
    input3.value = '≈241';
    input4.value = '98';
}

if (input2.value === 'Эйнштейний') {
    input1.value = 'Es';
    input3.value = '≈252';
    input4.value = '99';
}

if (input2.value === 'Фермий') {
    input1.value = 'Fm';
    input3.value = '≈257';
    input4.value = '100';
}

if (input2.value === 'Менделевий') {
    input1.value = 'Md';
    input3.value = '≈258';
    input4.value = '101';
}

if (input2.value === 'Нобелий') {
    input1.value = 'No';
    input3.value = '≈259';
    input4.value = '102';
}

if (input2.value === 'Лоуренский') {
    input1.value = 'Lr';
    input3.value = '≈260';
    input4.value = '103';
}

if (input2.value === 'Резерфордий') {
    input1.value = 'Rf';
    input3.value = '≈261';
    input4.value = '104';
}

if (input2.value === 'Дубний') {
    input1.value = 'Db';
    input3.value = '≈262';
    input4.value = '105';
}

if (input2.value === 'Сиборгий') {
    input1.value = 'Sg';
    input3.value = '≈266';
    input4.value = '106';
}

if (input2.value === 'Борий') {
    input1.value = 'Bh';
    input3.value = '≈267';
    input4.value = '107';
}

if (input2.value === 'Хассий') {
    input1.value = 'Hs';
    input3.value = '≈269';
    input4.value = '108';
}

if (input2.value === 'Мейнтнерий') {
    input1.value = 'Mt';
    input3.value = '≈268';
    input4.value = '109';
}

if (input2.value === 'Дармштадтий') {
    input1.value = 'Ds';
    input3.value = '≈271';
    input4.value = '110';
}

if (input2.value === 'Рентгений') {
    input1.value = 'Rg';
    input3.value = '≈282';
    input4.value = '111';
}

if (input2.value === 'Коперниций') {
    input1.value = 'Cn';
    input3.value = '≈285';
    input4.value = '112';
}

if (input2.value === 'Нихоний') {
    input1.value = 'Nh';
    input3.value = '≈286';
    input4.value = '113';
}

if (input2.value === 'Флеровий') {
    input1.value = 'Fl';
    input3.value = '≈289';
    input4.value = '114';
}

if (input2.value === 'Московий') {
    input1.value = 'Mc';
    input3.value = '≈288';
    input4.value = '115';
}

if (input2.value === 'Ливерморий') {
    input1.value = 'Lv';
    input3.value = '≈293';
    input4.value = '116';
}

if (input2.value === 'Теннессин') {
    input1.value = 'Ts';
    input3.value = '≈294';
    input4.value = '117';
}

if (input2.value === 'Оганесон') {
    input1.value = 'Og';
    input3.value = '≈294';
    input4.value = '118';
}
});

input4.addEventListener('input', () => {
  if (input4.value === '1') {
    input1.value = 'H';
    input2.value = 'Водород';
    input3.value = '1';
  }
});
