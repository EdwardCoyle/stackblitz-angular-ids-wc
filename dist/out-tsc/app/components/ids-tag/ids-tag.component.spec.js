import { TestBed } from '@angular/core/testing';
import { IdsTagComponent } from './ids-tag.component';
describe('IdsTagComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsTagComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsTagComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-tag.component.spec.js.map