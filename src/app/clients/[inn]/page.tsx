import React from 'react'

type Params = {
	params: {
		inn: string
	}
}

const Client = ({params} : Params) => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Клиент {params.inn}</h1>
			</main>
	)
}

export default Client
