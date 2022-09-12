"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("../populating-next-right-pointers-in-each-node/TreeNode"));
const assert_1 = __importDefault(require("assert"));
const connect_1 = __importDefault(require("../populating-next-right-pointers-in-each-node/connect"));
// TODO: Finish
describe("connect()", () => {
    it("Should populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL", () => {
        const problem = new TreeNode_1.default(1, new TreeNode_1.default(2, new TreeNode_1.default(4), new TreeNode_1.default(5)), new TreeNode_1.default(3, new TreeNode_1.default(6), new TreeNode_1.default(7)));
        const answer = new TreeNode_1.default(1, undefined, new TreeNode_1.default(2));
        assert_1.default.deepEqual((0, connect_1.default)(problem), answer);
    });
});
