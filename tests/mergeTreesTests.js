"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("../merge-two-binary-tress/TreeNode"));
const mergeTrees_1 = __importDefault(require("../merge-two-binary-tress/mergeTrees"));
const assert_1 = __importDefault(require("assert"));
// Hopefully solving is less difficult than writing the tests
describe("mergeTrees()", () => {
    it("Should return the merged tree.", () => {
        const problemRoot1 = new TreeNode_1.default(1, new TreeNode_1.default(3, new TreeNode_1.default(5)), new TreeNode_1.default(2));
        const problemRoot2 = new TreeNode_1.default(2, new TreeNode_1.default(1, null, new TreeNode_1.default(4)), new TreeNode_1.default(3, null, new TreeNode_1.default(7)));
        const answer = new TreeNode_1.default(3, new TreeNode_1.default(4, new TreeNode_1.default(5), new TreeNode_1.default(4)), new TreeNode_1.default(5, null, new TreeNode_1.default(7)));
        assert_1.default.deepEqual((0, mergeTrees_1.default)(problemRoot1, problemRoot2), answer);
    });
    it("Should return the merged tree.", () => {
        const problemRoot1 = new TreeNode_1.default(1);
        const problemRoot2 = new TreeNode_1.default(1, new TreeNode_1.default(2));
        const answer = new TreeNode_1.default(2, new TreeNode_1.default(2));
        assert_1.default.deepEqual((0, mergeTrees_1.default)(problemRoot1, problemRoot2), answer);
    });
});
