export interface IResidentList {
	id: string;
	name: string;
	status: string;
	room: string;
	attendance: Array<IResident>
}

export type IResidentTable = Pick<IResidentList, "name" | "status">

export interface IResident {
	programId: string;
	residentId: string;
	status: Status
}

export enum Status {
	ACTIVE = "Active",
	PASSIVE = "Passive",
	DECLINED = "Declined",
	UNDEFINED = "Undefined"
}