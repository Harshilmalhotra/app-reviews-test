import React, { useEffect } from 'react';

import SecondGraph from '../components/problemgraphs/SecondGraph';
import ThirdGraph from '../components/problemgraphs/ThirdGraph';
import PieGraph from '../components/problemgraphs/PieGraph';
import TvsSGraph from '../components/problemgraphs/TvsSGraph';
import SideNav from '../components/SideNav/SideNav';
import Dropdown from '../components/Dropdown';

export default function Problem() {

	useEffect(() => {
		document.title = 'Problem | App Reviews';
	}, []);

	return (
		<div className="flex bg-slate-700">

			<SideNav active="Problem" />

			<div className="flex flex-col flex-grow">
				<Dropdown />

				<div className="grid p-8">
					<div className="flex flex-wrap justify-between items-start gap-4" >
						<div className="card bg-orange-200 shadow-xl w-full overflow-hidden rounded-lg" style={{ maxWidth: '628.57px', minHeight: '555px', padding: '20px' }}>
							<TvsSGraph />
						</div>
						<div className="flex flex-col gap-4">
							<div className="card bg-base-100 w-full shadow-xl overflow-hidden rounded-lg" style={{ maxWidth: '333.33px', minHeight: '250px', padding: '20px' }}>
								<SecondGraph />
							</div>
							<div className="card bg-grey-200 w-full shadow-xl overflow-hidden rounded-lg" style={{ maxWidth: '333.33px', minHeight: '250px', padding: '20px' }}>
								<ThirdGraph />
							</div>
						</div>
						<div className="card bg-cyan-200 shadow-xl p-5 overflow-hidden rounded-lg" style={{ maxWidth: '226.8px', minHeight: '550px', padding: '20px' }}>
							<PieGraph />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
