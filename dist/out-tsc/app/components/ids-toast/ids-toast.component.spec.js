import { TestBed } from '@angular/core/testing';
import { IdsToastComponent } from './ids-toast.component';
describe('IdsToastComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsToastComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsToastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-toast.component.spec.js.map