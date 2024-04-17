import Article from "./Article";
// importo los datos
//import data from "./../data"
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import ContainerTitle from "./ContainerTitle";

function Container() {
	const [employeeData, setemployeeData] = useState();
	const [{ data, isLoading, isError }] = useFetch('https://jsonplaceholder.typicode.com/users');

	useEffect(() => {
		if (data) setemployeeData(data);
	}, [data])

	const fireEmployee = (personId) => {
		setemployeeData(employeeData.filter(el => el.id != personId))
	}

	const resetEmployees = () => {
		setemployeeData(data);
	}

	return (
		<main>
			<section className="container">
				{
					isError && <div>Ha habido un error</div>
				}
				{isLoading && !isError
					? <div>Loading...</div>
					: <div>
						{employeeData?.length === 0 && <div>
							<h3>¡No queda nadie en la empresa!</h3>
							<div onClick={resetEmployees} className="button-new">Contratalos a todos de nuevo!</div>
						</div>
						}
						{!!employeeData?.length && !isLoading && <ContainerTitle employeeNumber={employeeData?.length} />}
						{!!employeeData?.length && employeeData.map(person => <Article employeeData={person} fireEmployee={fireEmployee} key={person.id} />)}
					</div>
				}
			</section>
		</main>
	)
}

export default Container;

