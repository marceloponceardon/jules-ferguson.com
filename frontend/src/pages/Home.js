// Home page component

import portrait from "../content/portrait.jpg";

function Home() {
	return (
		<div className="Page" id="home">
			<span className="Content">
				<div className="Flex-gap" id="1"></div>
				<div className="Text-Container">
					<img 
						src={portrait}
						alt="Jules Ferguson Portrait"
					/>
					<p>
						<h1>Jules Ferguson</h1>
						<h2>she/they</h2>
						<h3>
							Photographer - Educator -	Researcher
						</h3>
							Jules is a femme photographer and mixed media artist who’s work explores
							violence, pain and queerness. They were raised in Calgary - the land that has
							given so much to many - and now reside in Tkaronto.
							<br/>
							<br/>
							Jules is a 4th generation survivor of intimate partner violence and sexual
							assault. Much of their work navigates healing intergenerational trauma and
							harmful family values that make those in power feel entitled to control others
							emotions. Jules is often reflective of how to decolonize within her own family,
							allowing femme elders in her life to be soft rather than combative, and to find
							power in rest and love. Today, Jules works as a consent educator, facilitating
							conversations about how to create cultures of consent, set and respect
							boundaries, and support survivors. Much of her work is shaped by lived
							experience and she is greatly fulfilled by validating the experiences of other	
							survivors and helping them to have conversations about consent in trauma-informed ways.
							<br/>
							<br/>
							Jules' artistic practice explores how the mind and the body remembers the
							past. They were raised to believe that if you are mentally strong enough to
							ignore physical pain, you will be rewarded. This, intertwined with familial
							discomfort surrounding vulnerability, leads one to ignore their body’s warning
							signs of trouble. Battling with undiagnosed pain throughout their body, and
							especially their hands, Jules’ recent work explores how to talk about pain and
							learning to navigate the world with their ever-changing needs.
					</p>
				</div>
				<div className="Flex-gap" id="2"></div>
			</span>
		</div>
	);
}

export default Home;
