module.exports = {
  collectCoverageFrom: [
		'packages/**/src/**/*.{js,jsx,ts,tsx}'
	],
	coveragePathIgnorePatterns: [
		'index.ts',
	],
  coverageThreshold: {
		global: {
			statements: 75,
			branches: 70,
			lines: 80,
			functions: 70,
		}
	},
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/utils/setupTests.ts'],
  modulePathIgnorePatterns: ['dist', '.yarn', 'node_modules'],
  testRegex: ['(/.*[.](test)).[jt]sx?$']
}
