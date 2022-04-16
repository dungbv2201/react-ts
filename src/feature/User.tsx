import React from 'react';
import Table, {TableColumn} from "../components/Table";

type TUser = {
	name: string;
	age: number;
	email: string;
	id: number;
	gender: 0 | 1;
}
const data: TUser[] = [
	{name: 'dungbv', age: 18, email: 'dungbv@gmail.com', id:1, gender: 0},
	{name: 'dungbv', age: 18, email: 'dungbv@gmail.com', id: 2, gender: 0},
	{name: 'dungbv', age: 18, email: 'dungbv@gmail.com', id: 3, gender: 1},
	{name: 'dungbv', age: 18, email: 'dungbv@gmail.com', id: 4, gender: 0},
];

const columns: TableColumn<TUser>[] = [
	{ title: 'ID', field: 'id'},
	{ title: 'Name', field: 'name'},
	{ title: 'Age', field: 'age'},
	{ title: 'Email', field: 'email'},
	{ title: 'Gender', field: 'gender', Cell({entry}: { entry: TUser }): React.ReactElement {
		return <span>{entry.gender === 0? 'Male': 'Female'}</span>
		}},
]
function User() {
	return (
		<div>
			<Table<TUser>
				column={columns} data={data}
			/>
		</div>
	);
}

export default User;
