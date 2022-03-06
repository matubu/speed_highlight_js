/**
 * Languages supported
 * @typedef {('asm'|'bash'|'bf'|'c'|'css'|'csv'|'diff'|'docker'|'git'|'go'|'html'|'http'|'ini'|'java'|'js'|'jsdoc'|'json'|'leanpub-md'|'log'|'lua'|'make'|'md'|'pl'|'plain'|'py'|'regex'|'rs'|'sql'|'todo'|'toml'|'ts'|'uri'|'xml'|'yaml')} ShjLanguage
 */
export const languages = [
	'asm',
	'bash',
	'bf',
	'c',
	'css',
	'csv',
	'diff',
	'docker',
	'git',
	'go',
	'html',
	'http',
	'ini',
	'java',
	'js',
	'jsdoc',
	'json',
	'leanpub-md',
	'log',
	'lua',
	'make',
	'md',
	'pl',
	'plain',
	'py',
	'regex',
	'rs',
	'sql',
	'todo',
	'toml',
	'ts',
	'uri',
	'xml',
	'yaml'
]

/**
 * Themes supported in the browser
 * @typedef {('atom-dark'|'github-dark'|'github-dim'|'dark'|'default'|'github-light'|'visual-studio-dark')} ShjBrowserTheme
 */
export const themesBrowser = [
	'atom-dark',
	'github-dark',
	'github-dim',
	'dark',
	'default',
	'github-light',
	'visual-studio-dark'
]

/**
 * Languages supported
 * @typedef {('default')} ShjTerminalTheme
 */
export const themesTerminal = [
	'atom-dark',
	'default'
]

export const testFiles = [
	...languages,
	'oneline.bash',
	'oneline.http',
	'screenshot.js'
]