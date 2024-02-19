import { TIconName } from './alias';

export interface IAtomsCustomButtonProps {
  color: string;
  text: string;
  onClickFunction: () => void;
}

export interface IMoleculesGnbNavigatorProps {
  leftIcon: TIconName;
  rightIcon: TIconName;
  leftIconColor: string;
  rightIconColor: string;
  leftOnClickFunction: () => void;
  rightOnClickFunction: () => void;
}
