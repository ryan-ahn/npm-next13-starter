import { TIconName } from './alias';

export interface IAtomsCustomButtonProps {
  color: string;
  text: string;
  onClickFunction: () => void;
}

export interface IAtomsCustomTitleProps {
  title: string;
  description: string;
}

export interface IMoleculesGnbNavigatorProps {
  rightText: string;
  leftIcon: TIconName;
  rightIcon: TIconName;
  leftIconColor: string;
  rightIconColor: string;
  leftOnClickFunction: () => void;
  rightOnClickFunction: () => void;
}
