import { TestBed } from '@angular/core/testing';
import { IdsVirtualScrollComponent } from './ids-virtual-scroll.component';
describe('IdsVirtualScrollComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsVirtualScrollComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsVirtualScrollComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-virtual-scroll.component.spec.js.map