import Header from "../components/common/Header";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import TestType from "../components/settings/TestType";
import Sensores from "../components/settings/Sensores";


const SettingsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>				
				<TestType />	
				<Sensores />				
				<ConnectedAccounts />				
			</main>
		</div>
	);
};
export default SettingsPage;
