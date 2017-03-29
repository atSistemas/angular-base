export interface User {
  client: string;
  clientDescription: string;
  username: string;
  password: string;
  userId: string;
  cultureCode: string;
  cultureShortDate: string;
  cultureDecimalSeparator: string;
  userDescription: string;

  /*get firstLetter() {
      return this.userDescription && this.userDescription.substring(0, 1).toUpperCase() || '';
  }*/
}
