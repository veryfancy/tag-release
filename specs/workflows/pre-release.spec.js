const preReleaseWorkflow = require("../../src/workflows/pre-release");
const run = require("../../src/workflows/steps");

describe("pre-release workflow", () => {
	it("should have all of the required steps", () => {
		expect(preReleaseWorkflow).toEqual([
			run.isPackagePrivate,
			run.gitFetchUpstream,
			run.getCurrentBranchVersion,
			run.checkExistingPrereleaseIdentifier,
			run.setPrereleaseIdentifier,
			run.getFeatureBranch,
			run.gitMergeUpstreamBranch,
			run.gitShortLog,
			run.previewLog,
			run.askSemverJump,
			run.updateVersion,
			run.gitDiff,
			run.gitStageConfigFile,
			run.gitCommit,
			run.gitTag,
			run.gitPushUpstreamFeatureBranch,
			run.npmPublish,
			run.githubUpstream,
			run.githubRelease
		]);
	});
});
