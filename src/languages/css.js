export default [
	{
		match: /\/\*((?!\*\/)[^])*(\*\/)?/g,
		sub: 'todo'
	},
	{
		expand: 'str'
	},
	{
		type: 'kwd',
		match: /@\w+\b|\b(and|not|only|or)\b|[a-z-]+(?=[^{}]*{)/g
	},
	{
		type: 'var',
		match: /\b[\w-]+(?=\s*:)|(::?|\.)[\w-]+(?=[^{}]*{)/g
	},
	{
		type: 'oper',
		match: /[+~>*|,;:=]+/g
	},
	{
		type: 'func',
		match: /#[\w-]+(?=[^{}]*{)/g
	},
	{
		type: 'num',
		match: /#[\da-f]{3,8}|\d(\.\d)?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vm|vh|vmin|vmax|%)?/g
	},
	{
		type: 'func',
		match: /[a-zA-Z]\w*(?=\s*\()/g
	}
]
