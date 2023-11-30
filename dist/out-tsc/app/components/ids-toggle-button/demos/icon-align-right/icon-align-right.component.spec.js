import { TestBed } from '@angular/core/testing';
import { IconAlignRightComponent } from './icon-align-right.component';
describe('IconAlignRightComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IconAlignRightComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IconAlignRightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=icon-align-right.component.spec.js.map