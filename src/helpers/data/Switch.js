import Interp from './Interp';

const interpOptions = (int) => {
  switch (int) {
    case 'chased':
      console.warn(Interp.chased);
      break;
    case 'falling':
      console.warn(Interp.falling);
      break;
    case 'flying':
      console.warn(Interp.flying);
      break;
    case 'naked':
      console.warn(Interp.naked);
      break;
    case 'tiger':
      console.warn(Interp.tiger);
      break;
    default:
      console.warn('nothing selected');
  }
};

const printInterpretation = () => {
  Interp.forEach((int) => interpOptions(int));
};

export { interpOptions, printInterpretation };
