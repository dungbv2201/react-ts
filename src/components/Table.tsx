import React from 'react';

export type TableColumn<Entry> = {
	title: string;
	field: keyof Entry;
	Cell?({entry}: {entry: Entry}): React.ReactElement
}
type TableProp<Entry> = {
	column: TableColumn<Entry>[];
	data: Entry[];
}

const Table = <Entry extends Record<string, any> = { id: number}>({ column , data}: TableProp<Entry>): React.ReactElement =>{
	if(data.length === 0){
		return (
			<h1>Empty</h1>
		)
	}
	return (
		<div className='w-full rounded shadow'>
			<table className='w-full divide-y divide-gray-200'>
				<thead>
				<tr className='bg-gray-50 text-xs uppercase tracking-wider font-medium bg-gray-50'>
					{ column.map(({title}: TableColumn<Entry>) => (<td className='px-3 py-2'> {title}</td>))}
				</tr>
				</thead>
				<tbody>
				{data.map((entry, index: number) => {
					return (
						<tr className={index % 2 === 0? 'bg-gray-100': 'bg-white'} key={entry.id}>
							{ column.map(({field, Cell}: TableColumn<Entry>) => {
								return (
									<td className='font-medium text-gray-900 text-xs px-3 py-2'>
										{Cell? <Cell entry={entry}/>: entry[field]}
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
