import { TestBed } from '@angular/core/testing';
import { IdsIconComponent } from './ids-icon.component';
describe('IdsIconComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsIconComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-icon.component.spec.js.map