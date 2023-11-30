import { ElementRef, ViewChild } from '@angular/core';
/**
 * To get the native element instead of ElementRef.nativeElement
 * @param selector Selector. Example: <div #selector></div>
 */
export function NativeElement(selector) {
    // Create the viewchild decorator with read: ElementRef
    const propDecoratorFn = ViewChild(selector, { read: ElementRef });
    // Target is the component object
    // Property key is the name of the property
    return function (target, propertyKey) {
        // Somehow this will execute the viewchild process to attach a new property called tempViewChildFor_
        // to the target (component object instance)
        propDecoratorFn(target, `tempViewChildFor_${String(propertyKey)}`);
        // Redefined the property with getter. It will return the tempViewChildFor_ with nativeElement
        Object.defineProperty(target, propertyKey, {
            get: function () {
                const property = this[`tempViewChildFor_${String(propertyKey)}`];
                if (!property) {
                    throw Error('Can not get ElementRef using selector, please check your component view again.');
                }
                return property.nativeElement;
            }
        });
    };
}
//# sourceMappingURL=native-element.decorator.js.map