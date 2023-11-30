import { TestBed } from '@angular/core/testing';
import { SizesComponent } from './sizes.component';
describe('SizesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SizesComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SizesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sizes.component.spec.js.map