import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Personal Date Night Creator',
			image: 'project1.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Materialize',
				'JQuery'
			],
			github: 'https://github.com/jmrendon48/Personal-Date-Night-Creator',
			deployed: 'https://jmrendon48.github.io/Personal-Date-Night-Creator/',
		},
		{
			name: 'The BasketBlog',
			image: 'project2.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Bulma',
				'Express & Sequelize',
				'MySQL'
			],
			github: 'https://github.com/alexandergiannini/sports-blog-friends',
			deployed: 'https://guarded-ravine-67476.herokuapp.com/',
		},
		{
			name: 'Password Generator',
			image: 'password.PNG',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/davitshirkhanyan/password-generator',
			deployed: 'https://davitshirkhanyan.github.io/password-generator/',
		},
		{
			name: 'Weather Dashboard',
			image: 'weather-dashboard.PNG',
			technologies: [
                'HTML/CSS',
				'JavaScript',
				'Bootstrap',
				'JQuery',
				'Moment.js',
				'Third-party APIs',
			],
			github: 'https://github.com/davitshirkhanyan/weather-dashboard',
			deployed: 'https://davitshirkhanyan.github.io/weather-dashboard/',
		},
		{
			name: 'Deep Thoughts',
			image: 'deep-thoughts.PNG',
			technologies: ['MongoDB', 'React', 'Express.js', 'Node.js'],
			github: 'https://github.com/davitshirkhanyan/deep-thoughts',
			deployed: 'https://deep-heroku-thoughts.herokuapp.com/',
		},
		{
			name: 'Pizza Hunt',
			image: 'pizza.PNG',
			technologies: ['HTML/CSS', 'Javascript', 'Node.js',
            'MongoDB', 'Mongoose', "IndexedDB"],
			github: 'https://github.com/davitshirkhanyan/pizza-hunt',
			deployed: 'https://pizza-heroku-hunt.herokuapp.com/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
				<ul className="flex-row portfolio-list"> 
                    <li className="project-list">
					<Project projects={projects[0]}></Project>  
					</li> 
                    <li className="project-list">
					<Project projects={projects[1]}></Project>  
					</li>  
                    <li className="project-list">
					<Project projects={projects[2]}></Project>  
					</li>
                    <li className="project-list">
					<Project projects={projects[3]}></Project>  
					</li> 
                    <li className="project-list">
					<Project projects={projects[4]}></Project>  
					</li> 
                    <li className="project-list">
					<Project projects={projects[5]}></Project>  
					</li>
				</ul>
		</section>
	);
}

export default Portfolio;