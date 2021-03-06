const {
	promoteWorkflow,
	promoteContinue
} = require("../../src/workflows/promote");
const run = require("../../src/workflows/steps");

describe("promote workflows", () => {
	describe("default", () => {
		it("should have all of the required steps", () => {
			expect(promoteWorkflow).toEqual([
				run.gitFetchUpstream,
				run.selectPrereleaseToPromote,
				run.gitCheckoutTag,
				run.getFeatureBranch,
				run.gitGenerateRebaseCommitLog,
				run.gitRemovePreReleaseCommits,
				run.gitRebaseUpstreamMaster,
				run.gitCheckoutMaster,
				run.gitMergeUpstreamMaster,
				run.gitMergePromotionBranch,
				run.getCurrentBranchVersion,
				run.checkHasDevelopBranch,
				run.gitMergeUpstreamDevelop,
				run.gitShortLog,
				run.previewLog,
				run.askSemverJump,
				run.updateLog,
				run.updateVersion,
				run.updateChangelog,
				run.updatePackageLockJson,
				run.gitDiff,
				run.gitAdd,
				run.gitCommit,
				run.gitTag,
				run.gitPushUpstreamMaster,
				run.npmPublish,
				run.gitCheckoutDevelop,
				run.gitMergeMaster,
				run.gitPushUpstreamDevelop,
				run.gitPushOriginMaster,
				run.githubUpstream,
				run.githubRelease,
				run.cleanUpTmpFiles,
				run.findBranchByTag,
				run.deleteLocalFeatureBranch,
				run.deleteUpstreamFeatureBranch,
				run.gitRemovePromotionBranches
			]);
		});
	});

	describe("promoteContinue", () => {
		it("should have all of the required steps", () => {
			expect(promoteContinue).toEqual([
				run.setPromote,
				run.gitCheckoutMaster,
				run.gitMergeUpstreamMaster,
				run.gitMergePromotionBranch,
				run.getCurrentBranchVersion,
				run.checkHasDevelopBranch,
				run.gitMergeUpstreamDevelop,
				run.gitShortLog,
				run.previewLog,
				run.askSemverJump,
				run.updateLog,
				run.updateVersion,
				run.updateChangelog,
				run.updatePackageLockJson,
				run.gitDiff,
				run.gitAdd,
				run.gitCommit,
				run.gitTag,
				run.gitPushUpstreamMaster,
				run.npmPublish,
				run.gitCheckoutDevelop,
				run.gitMergeMaster,
				run.gitPushUpstreamDevelop,
				run.gitPushOriginMaster,
				run.githubUpstream,
				run.githubRelease,
				run.cleanUpTmpFiles,
				run.findBranchByTag,
				run.deleteLocalFeatureBranch,
				run.deleteUpstreamFeatureBranch,
				run.gitRemovePromotionBranches
			]);
		});
	});
});
