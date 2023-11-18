export default {
	branches: [
		{
			name: 'main',
			channel: 'next'
		},
		{
			name: 'stable'
		}
	],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		['@semantic-release/npm', {
			publish: false,
		}],
		['@semantic-release/git', {
			assets: ['package.json', 'CHANGELOG.md'],
			message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
		}],
		['@semantic-release/github'],
	]
};
