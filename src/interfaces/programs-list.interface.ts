import { IResident } from "./resident-list.interface";

export interface IProgramList {
	id: string;
	name: string;
	location: string;
	attendance: Array<IResident>
}