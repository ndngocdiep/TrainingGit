import { Injectable, ComponentFactory, ComponentFactoryResolver, Type } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PageType } from 'src/app/common/web-api-parameter';
import { ApplicationParam } from 'src/app/common/web-api-parameter';
import { RZZPageNotFoundComponent } from '../rzzpage-not-found/rzzpage-not-found.component';

@Injectable()
export class RZZPCtrlService {

    constructor(
        private _modalService: NgbModal,
        private _Resolver: ComponentFactoryResolver,
    ) { }

    /**
     * Open page by dialog
     * (ダイアログでページを開く)
     * @param pageId: Page ID - ページID
     * @param paramInput: Input parameters - 入力パラメータ
     * @param appParam: Environment variable - 環境変数
     * @param dialogWidth: Customize dialog width. Default value is "default".
     *                     - ダイアログ幅のカスタマイズ。デフォルト値は「default」です。
     */
    ShowDialogPCrtl(
        pageId: string,
        paramInput: string[],
        appParam: ApplicationParam,
        dialogWidth: 'default' | '900' | '850' | '800' | '750' | '700' | '650' | '600' = 'default'
    ): Promise<true> {

        if (pageId.lastIndexOf('Component') < 0) {
            pageId = pageId + 'Component';
        }

        let modalRef: NgbModalRef;
        modalRef = this._modalService.open(
            this.GetFactoryComponent(pageId).componentType,
            {
                backdrop: 'static', keyboard: false,
                windowClass: 'esc-dialog esc-modal-' + dialogWidth,
                backdropClass: 'esc-modal-backdrop'
            }
        );

        const mParam = [];
        if (paramInput) {
            if (paramInput.length <= 0 ||
                (paramInput[0].toUpperCase() !== PageType.MAIN
                    && paramInput[0].toUpperCase() !== PageType.SUB)) {
                mParam.push(PageType.SUB);
            }
            paramInput.forEach(item => {
                mParam.push(item);
            });
        }

        modalRef.componentInstance.PARAM_ARRAY = mParam;
        modalRef.componentInstance.APP_PARAM = appParam;

        return modalRef.result;
    }

    /**
     * Get dynamic Component object by class name
     * (クラス名でコンポーネントオブジェクトを動的に取得)
     * @param componentName: The name of component - コンポーネントの名前
     */
    private GetFactoryComponent(componentName: string): ComponentFactory<any> {
        const factories = Array.from(this._Resolver['_factories'].keys());
        const factoryClass = <Type<any>>factories.find((x: any) => x.name === componentName);
        if (factoryClass) {
            return this._Resolver.resolveComponentFactory(factoryClass);
        } else {
            return this._Resolver.resolveComponentFactory(RZZPageNotFoundComponent);
        }
    }
}
