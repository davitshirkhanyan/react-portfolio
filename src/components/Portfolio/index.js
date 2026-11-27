import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Personal Date Night Creator',
			image: 'date-night.jpg',
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
			name: 'Shirkon Design',
			image: 'shirkon-design.jpg',
			technologies: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
			deployed: 'https://shirkondesign.com',
		},
		{
			name: 'The BasketBlog',
			image: 'basketblog.jpg',
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
			image: 'git-it-done.jpg',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/davitshirkhanyan/git-it-done',
			deployed: 'https://davitshirkhanyan.github.io/git-it-done/',
		},
		{
			name: 'Buy Local',
			image: 'buy-local.jpg',
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
			image: 'deep-thoughts.jpg',
			technologies: ['MongoDB', 'React', 'Express.js', 'Node.js'],
			github: 'https://github.com/davitshirkhanyan/deep-thoughts',
			deployed: 'https://deep-heroku-thoughts.herokuapp.com/',
		},
		{
			name: 'Pizza Hunt',
			image: 'pizza.jpg',
			technologies: ['HTML/CSS', 'Javascript', 'Node.js',
            'MongoDB', 'Mongoose', "IndexedDB"],
			github: 'https://github.com/davitshirkhanyan/pizza-hunt',
			deployed: 'https://pizza-heroku-hunt.herokuapp.com/',
		},
		{
			name: 'Shop-Shop',
			image: 'shop-shop.jpg',
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
				{projects.map((project) => (
					<li className="project-list" key={project.name}>
						<Project project={project} />
					</li>
				))}
			</ul>
		</section>
	);
}

export default Portfolio;