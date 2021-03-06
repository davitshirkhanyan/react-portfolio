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
			name: 'Git It Done',
			image: 'git-it-done.PNG',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/davitshirkhanyan/git-it-done',
			deployed: 'https://davitshirkhanyan.github.io/git-it-done/',
		},
		{
			name: 'Buy Local',
			image: 'buy-local.PNG',
			technologies: [
                'React',
				'GraphQL',
				'Cloudinary',
			],
			github: 'https://github.com/matt-gross-27/buy-local',
			deployed: 'https://buylocal-3000.herokuapp.com/',
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
		{
			name: 'Shop-Shop',
			image: 'shop-shop.PNG',
			technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'GraphQL', 'Apollo Server'],
			github: 'https://github.com/davitshirkhanyan/redux-store',
			deployed: 'https://redux-heroku-store.herokuapp.com/',
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
					<li className="project-list">
					<Project projects={projects[6]}></Project>  
					</li>
				</ul>
		</section>
	);
}

export default Portfolio;