import { TranslateService } from '../services/translate.service';
import { AlgovizEngineService } from '../services/algoviz-engine.service';
import { SchemaParserService } from '../services/schema-parser.service';

export interface INode {
  value: number;
  className: string;
  node_left?: INode;
  node_right?: INode;
}

export class BstNonBalancingAdd {

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

  _insertKeyFrame (data: any[]) {
    const keyFrame = {
                  id: data[0],
                args: data[1],
      activeElements: data[2],
        instructions: data[3],
    instructonActive: data[4],
         commentText: data[5]['comment-text'],
        commentAudio: data[5]['comment-audio'],
            commands: data[6],
                 BST: this.Root
    };
    this.algovizEngineService.animation.push(keyFrame);
  }

  insertKeyFrame(keyFrame: object): void {
    this.algovizEngineService.animation.push(keyFrame);
  }

  INSERT_BST(itemValue: number, className: string): void {
    const args = this.schema.data['schema']['bst_non_balancing_add']['procedures'][0]['args'];
    const instructions = this.schema.data['schema']['bst_non_balancing_add']['procedures'][0]['instructions'];
    const NewElem = BstNonBalancingAdd.createNewNode(itemValue, className, null, null);
    // додавання ключового кадру
    this._insertKeyFrame(['INSERT_BST', args, [className], 0, 0, instructions[0], ['updateBST']]);
    // додавання ключового кадру
    this._insertKeyFrame(['INSERT_BST', args, [NewElem.className], 0, 1, instructions[1], ['updateBST'] ]);
    this.Root = this.INSERT_NODE(this.Root, NewElem);
  }

  INSERT_NODE(Current: INode,  NewElem: INode): INode {
    const args = this.schema.data['schema']['bst_non_balancing_add']['procedures'][1]['args'];
    const instructions = this.schema.data['schema']['bst_non_balancing_add']['procedures'][1]['instructions'];
    if (Current === null) {
      // додавання ключового кадру
      this._insertKeyFrame(['INSERT_NODE', args, [NewElem.className], 1, 0, instructions[0], []]);
      // додавання ключового кадру
      this._insertKeyFrame([ 'INSERT_NODE', args, [NewElem.className], 1, 1, instructions[1], ['updateBST']]);
      return  NewElem;
    }
    if (NewElem.value < Current.value) {
      // додавання ключового кадру
      this._insertKeyFrame(['INSERT_NODE', args, [NewElem.className, Current.className], 1, 3, instructions[3], ['updateBST']]);
      // додавання ключового кадру
      this._insertKeyFrame(['INSERT_NODE', args, [NewElem.className], 1, 4, instructions[4], ['updateBST']]);
      Current.node_left = this.INSERT_NODE(Current.node_left, NewElem);
      Current = this.ROTATION_R(Current);
    } else {
      // додавання ключового кадру
      this._insertKeyFrame(['INSERT_NODE', args, [NewElem.className], 1, 6, instructions[6], ['updateBST']]);
      Current.node_right = this.INSERT_NODE(Current.node_right, NewElem);
      // додавання ключового кадру
      this._insertKeyFrame(['INSERT_NODE', args, [NewElem.className], 1, 7, instructions[7], ['updateBST']]);
      Current = this.ROTATION_L(Current);
    }
    return Current;
  }

  ROTATION_R(Current: INode): INode {
    const args = this.schema.data['schema']['bst_non_balancing_add']['procedures'][2]['args'];
    const instructions = this.schema.data['schema']['bst_non_balancing_add']['procedures'][2]['instructions'];
    // додавання ключового кадру
    this._insertKeyFrame(['ROTATION_R', args, [Current.className], 2, 0, instructions[0], ['updateBST']]);
    const Temp =  Current.node_left;
    Current.node_left = Temp.node_right;
    Temp.node_right = Current;
    Current = Temp;
    return Current;
  }

  ROTATION_L(Current: INode): INode {
    const args = this.schema.data['schema']['bst_non_balancing_add']['procedures'][3]['args'];
    const instructions = this.schema.data['schema']['bst_non_balancing_add']['procedures'][3]['instructions'];
    this._insertKeyFrame(['ROTATION_L', args, [Current.className], 3, 0, instructions[0],  ['updateBST']]);
    const Temp =  Current.node_right;
    Current.node_right = Temp.node_left;
    Temp.node_left = Current;
    Current = Temp;
    return Current;
  }

}
