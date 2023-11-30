import { TestBed } from '@angular/core/testing';
import { IdsSwaplistComponent } from './ids-swaplist.component';
describe('IdsSwaplistComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsSwaplistComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsSwaplistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-swaplist.component.spec.js.map