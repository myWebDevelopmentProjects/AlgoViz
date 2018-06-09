import { TranslateService } from '../services/translate.service';
import { AlgovizEngineService } from '../services/algoviz-engine.service';

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
    private translate: TranslateService
  ) {
    this.Root = null;
    console.log(algovizEngineService.itemList);
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
      className = '.item_list_' + i;
      this.INSERT_BST(itemList[i], className);
      i++;
    }
    console.log(this.Root);
    console.log(this.algovizEngineService.animation);
  }

  insertKeyFrame(keyFrame: object): void {
    this.algovizEngineService.animation.push(keyFrame);
  }

  INSERT_BST(itemValue: number, className: string): void {
    // додавання ключового кадру -- СТАРТ
    this.insertKeyFrame({
        id: 'INSERT_BST',
        value: itemValue,
        className: className,
        commentText: this.translate.data['CREATE-NEW-ELEMENT']
    });
    // додавання ключового кадру -- КІНЕЦЬ
    const NewElem = BstNonBalancingAdd.createNewNode(itemValue, className, null, null);
    // додавання ключового кадру -- СТАРТ
    this.insertKeyFrame({
      id: 'INSERT_BST',
      value: itemValue,
      className: className,
      commentText: this.translate.data['CURRENT-ELEMENT-TO-BE-ROOT'],
      audioFile: '/assets/audio/INSERT_BST_02.mp3'
    });
    // додавання ключового кадру -- КІНЕЦЬ
    this.Root = this.INSERT_NODE(this.Root, NewElem);
  }

  INSERT_NODE(Current: INode,  NewElem: INode): INode {
    if (Current === null) {
      // додавання ключового кадру -- СТАРТ
      const key_frame = {
        id: 'INSERT_NODE',
        value: null,
        className: null
      };
      this.algovizEngineService.animation.push(key_frame);
      // додавання ключового кадру -- КІНЕЦЬ
      return  NewElem;
    }
    /*
    if (NewElem === null) {
      return  Current;
    }*/
    if (NewElem.value === Current.value) {
      throw new Error('values are equal');
    } else if (NewElem.value < Current.value) {
      Current.node_left = this.INSERT_NODE(Current.node_left, NewElem);
      Current = this.ROTATION_R(Current);
    } else {
      Current.node_right = this.INSERT_NODE(Current.node_right, NewElem);
      Current = this.ROTATION_L(Current);
    }
    return Current;
  }

  ROTATION_R(Current: INode): INode {
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
