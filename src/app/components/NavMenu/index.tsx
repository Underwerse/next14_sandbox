'use client'
import Link from "next/link"
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

function AuthButton() {
	const {data: session} = useSession();

	if (session) {
		return (
			<>
				{session?.user?.name} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	)
}

const NavMenu = () => {
	return (
		<div>
			<AuthButton />
		</div>
	)
}

export default NavMenu
