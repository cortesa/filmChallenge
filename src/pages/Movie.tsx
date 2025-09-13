import { Suspense } from "react"

import Layout from "@/components/layout"
import { MovieInfo } from "@/components/MovieInfo"
import { BackButton } from "@/components/ui/BackButtton"

export const Movie = () => {

	return (
	<Layout title={<div className="pageTitle"><BackButton /> Movie detail</div>}>
		<Suspense fallback={<p>Loading details...</p>}>
			<MovieInfo />
		</Suspense>
	</Layout>
	)
}
