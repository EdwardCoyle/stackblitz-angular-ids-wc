import { TestBed } from '@angular/core/testing';
import { IdsTreeComponent } from './ids-tree.component';
describe('IdsTreeComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsTreeComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsTreeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-tree.component.spec.js.map