import { TestBed } from '@angular/core/testing';
import { IdsModalComponent } from './ids-modal.component';
describe('IdsModalComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsModalComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-modal.component.spec.js.map