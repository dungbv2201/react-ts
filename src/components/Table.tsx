import React from 'react';

type TableColumn<Entry> = {
	title: string;
	field: keyof Entry;
}
type TableProp<Entry> = {
	column: TableColumn<Entry>[];
	data: Entry[];
}

const Table = <Entry extends unknown>({ column , data}: TableProp<Entry>): React.ReactElement =>{
	if(data.length === 0){
		return (
			<h1>Empty</h1>
		)
	}
	return (
		<div className='w-full rounded shadow'>
			<table className='w-full divide-y divide-gray-200'>
				<thead>
				<tr className='bg-gray-50 px-3 py-2 text-xs uppercase tracking-wider font-medium'>
					{ column.map(({title, field}) => (<td> {title}</td>))}
				</tr>
				</thead>
				<tbody>
				{data.map((entry, index: number) => {
					return (
						<tr className='bg-gray-100'>
							{ column.map(({field}: TableColumn<Entry>) => {
								return (
									<td className='font-medium text-gray-900 text-xs px-3 py-2'>
										{entry}
									</td>
								)
							})}
						</tr>
					)
				})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
