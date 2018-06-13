import { TranslateService } from '../services/translate.service';
import { AlgovizEngineService } from '../services/algoviz-engine.service';
import { SchemaParserService } from '../services/schema-parser.service';

export interface INode {
  value: number;
  className: string;
  node_left?: INode;
  node_right?: INode;
}

export class BstLocalBalancingAmortization {

  Root: INode;

  static createNewNode(item: number, className: string, leftNode?: INode, rightNode?: INode): INode {
    return {
      value: item,
      className: className,
      node_left: leftNode,
      node_right: rightNode
    };
  }
  constructor(
    private algovizEngineService: AlgovizEngineService,
    private translate: TranslateService,
    private schema: SchemaParserService
  ) {
    this.algovizEngineService.BST = null;
    this.Root = null;
    this.initAlgorithm();
  }

  initAlgorithm(): void {
    let i: number;
    let max: number;
    i = 0;
    max = this.algovizEngineService.itemList.length;
    const itemList = this.algovizEngineService.itemList;
    while (i < max ) {
      let className: string;
      className = i < 10 ? 'item_list_0' + i : 'item_list_' + i;
      this.INSERT_BST(itemList[i], className);
      i++;
    }
  }

  insertKeyFrame(keyFrame: object): void {
    this.algovizEngineService.animation.push(keyFrame);
  }

  INSERT_BST(itemValue: number, className: string): void {
    const args = this.schema.data['schema']['bst_non_balancing_add']['procedures'][0]['args'];
    const instructions = this.schema.data['schema']['bst_non_balancing_add']['procedures'][0]['instructions'];
    const NewElem = BstLocalBalancingAmortization.createNewNode(itemValue, className, null, null);
    // додавання ключового кадру -- СТАРТ
    this.insertKeyFrame({
      id: 'INSERT_BST',
      args: args,
      activeElements: [className],
      instructions: 0,
      instructonActive: 0,
      commentText: instructions[0]['comment-text'],
      commentAudio: instructions[0]['comment-audio'],
      commands: [],
      BST: this.Root
    });
    // додавання ключового кадру -- КІНЕЦЬ
    // додавання ключового кадру -- СТАРТ
    this.insertKeyFrame({
      id: 'INSERT_BST',
      args: args,
      instructions: 0,
      instructonActive: 1,
      commentText: instructions[1]['comment-text'],
      commentAudio: instructions[1]['comment-audio'],
      activeElements: [NewElem.className],
      commands: ['updateBST'],
      BST: this.Root
    });
    // додавання ключового кадру -- КІНЕЦЬ
    this.Root = this.INSERT_NODE(this.Root, NewElem);
  }

  INSERT_NODE(Current: INode,  NewElem: INode): INode {
    const args = this.schema.data['schema']['bst_non_balancing_add']['procedures'][1]['args'];
    const instructions = this.schema.data['schema']['bst_non_balancing_add']['procedures'][1]['instructions'];
    if (Current === null) {
      // додавання ключового кадру -- СТАРТ
      this.insertKeyFrame({
        id: 'INSERT_NODE',
        args: args,
        instructions: 1,
        instructonActive: 0,
        commentText: instructions[0]['comment-text'],
        commentAudio: instructions[0]['comment-audio'],
        activeElements: [NewElem.className],
        commands: [],
        BST: this.Root
      });
      // додавання ключового кадру -- КІНЕЦЬ
      // додавання ключового кадру -- СТАРТ
      this.insertKeyFrame({
        id: 'INSERT_NODE',
        args: args,
        instructions: 1,
        instructonActive: 1,
        commentText: instructions[1]['comment-text'],
        commentAudio: instructions[1]['comment-audio'],
        activeElements: [NewElem.className],
        commands: ['updateBST'],
        BST: this.Root
      });
      // додавання ключового кадру -- КІНЕЦЬ
      return  NewElem;
    }
    /*
    if (NewElem === null) {
      return  Current;
    }*/
    if (NewElem.value < Current.value) {
      // додавання ключового кадру -- СТАРТ
      this.insertKeyFrame({
        id: 'INSERT_NODE',
        args: args,
        instructions: 1,
        instructonActive: 1,
        commentText: instructions[1]['comment-text'],
        commentAudio: instructions[1]['comment-audio'],
        activeElements: [NewElem.className, Current.className],
        commands: ['updateBST'],
        BST: this.Root
      });
      // додавання ключового кадру -- КІНЕЦЬ
      // додавання ключового кадру -- СТАРТ
      this.insertKeyFrame({
        id: 'INSERT_NODE',
        args: args,
        instructions: 1,
        instructonActive: 2,
        commentText: instructions[2]['comment-text'],
        commentAudio: instructions[2]['comment-audio'],
        activeElements: NewElem.className,
        commands: ['updateBST'],
        BST: this.Root
      });
      // додавання ключового кадру -- КІНЕЦЬ
      Current.node_left = this.INSERT_NODE(Current.node_left, NewElem);
      Current = this.ROTATION_R(Current);
    } else {
      // додавання ключового кадру -- СТАРТ
      this.insertKeyFrame({
        id: 'INSERT_NODE',
        args: args,
        instructions: 1,
        instructonActive: 3,
        commentText: instructions[3]['comment-text'],
        commentAudio: instructions[3]['comment-audio'],
        commands: ['updateBST'],
        activeElements: NewElem.className,
        BST: this.Root
      });
      // додавання ключового кадру -- КІНЕЦЬ
      Current.node_right = this.INSERT_NODE(Current.node_right, NewElem);
      // додавання ключового кадру -- СТАРТ
      this.insertKeyFrame({
        id: 'INSERT_NODE',
        args: args,
        instructions: 1,
        instructonActive: 4,
        commentText: instructions[4]['comment-text'],
        commentAudio: instructions[4]['comment-audio'],
        activeElements: [NewElem.className],
        commands: ['updateBST'],
        BST: this.Root
      });
      // додавання ключового кадру -- КІНЕЦЬ
      Current = this.ROTATION_L(Current);
    }
    return Current;
  }

  ROTATION_R(Current: INode): INode {
    const args = this.schema.data['schema']['bst_non_balancing_add']['procedures'][2]['args'];
    const instructions = this.schema.data['schema']['bst_non_balancing_add']['procedures'][2]['instructions'];
    this.insertKeyFrame({
      id: 'ROTATION_R',
      args: args,
      instructions: 1,
      instructonActive: 0,
      commentText: instructions[0]['comment-text'],
      commentAudio: instructions[0]['comment-audio'],
      activeElements: Current.className,
      commands: ['updateBST'],
      BST: this.Root
    });
    // додавання ключового кадру -- КІНЕЦЬ
    const Temp =  Current.node_left;
    Current.node_left = Temp.node_right;
    Temp.node_right = Current;
    Current = Temp;
    return Current;
  }

  ROTATION_L(Current: INode): INode {
    const Temp =  Current.node_right;
    Current.node_right = Temp.node_left;
    Temp.node_left = Current;
    Current = Temp;
    return Current;
  }

}
